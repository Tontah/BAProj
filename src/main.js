import {words} from "./word.js";
import {dictionary} from "./dictionary.js";
//const dictionary = ["mass","met", "meter", "method", "foll", "for"];

//constructor for identifierAndAttributes
function IdentifierAndAttributes(style, identifierValue, arrayPosition) {
    this.style = style;
    this.identifierValue = identifierValue;
    this.arrayPosition = arrayPosition;
}
let identifier = "";
let identifierAndDistractors =[];
const mainPage = document.querySelector(".mainPage");
let identifierToStudy  = document.querySelector(".identifierDiv h1");
let nextButton = document.querySelector(".btn button");
let downloadButton = document.querySelector(".downloadBtn button");
let content = document.querySelector(".content");
let experimentTitle = document.querySelector(".experimentTitle h1");
let start = 0;
let end = 0;
let csvData = [["Style","number of Words","Answer","Time(ms)"]];
let camelCase = 0;
let underScore = 0;
const identifierStyle = ["Camelcase", "Underscore"];
const noOfWords = [2, 3];
let csv = "";
let rng = new Math.seedrandom("hello");
let distractor1 = "";
let distractor2 = "";
let distractor3 = "";
let style = "";
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
let numberOfWords =0;
const identifier0 = document.querySelector(".identifier0");
const identifier1 = document.querySelector(".identifier1");
const identifier2 = document.querySelector(".identifier2");
const identifier3 = document.querySelector(".identifier3");
let firstWord = "";
let secondWord = "";
let thirdWord = "";



downloadButton.disabled = true;
downloadButton.hidden = true;
content.disabled = true;
content.hidden = true;


//function to show the identifier to be studied
function showIdentifier(){
    mainPage.innerHTML = "";
    nextButton.disabled = true;
    nextButton.hidden = true;
    content.disabled = true;
    content.hidden = true;
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");
    para1.innerText = "Below, you will see an sentence, please study/memorize this.";
    para2.innerText = "place your hand on the num keys and keep your hand there till the experiment ends.";
    para3.innerText = "Press the number showing below the text with the identifier that matches the sentence you just saw.";
    para4.innerText = "Then you press enter to proceed.";
    mainPage.appendChild(para1);
    mainPage.appendChild(para2);
    mainPage.appendChild(para3);
    mainPage.appendChild(para4);
    style = identifierStyle[getRandomInt(1000)%identifierStyle.length];
   numberOfWords = noOfWords[getRandomInt(1000)%noOfWords.length];
    for (let i = 0; i < numberOfWords; i++) {
        let position = rng.int32() % words.length;
        if (position < 0) {
            position = -1 * position;
        }
        if(words[position].length>3) {
            if (style === "Camelcase" && camelCase < 150) {
                if (i !== 0) {
                    identifier = identifier + words[position].charAt(0).toUpperCase() + words[position].slice(1);
                    if (i === 1) {
                        secondWord = words[position];
                    } else if (i === 2) {
                        thirdWord = words[position];
                        console.log("identifier = " + identifier);
                    }
                } else {
                    identifier = words[position];
                    firstWord = words[position];
                }
            } else {
                if (style === "Camelcase") {
                    style = "Underscore";
                }
                if (i !== 0) {
                    identifier = identifier + "_" + words[position];
                    if (i === 1) {
                        secondWord = words[position];
                    } else if (i === 2) {
                        thirdWord = words[position];
                        console.log("identifier = " + identifier);
                    }
                } else {
                    identifier = words[position];
                    firstWord = words[position];
                }
            }
        }
    }
    if(style === "Underscore"){
        underScore++;
    }
    else {camelCase++;}
    generateDistractors(firstWord, secondWord, thirdWord, style);
    identifierAndDistractors.push(new IdentifierAndAttributes(style,identifier,identifierAndDistractors.length));

    let nodeForH1 = document.createTextNode(firstWord + " " + secondWord + " " + thirdWord);
    identifierToStudy.appendChild(nodeForH1);
}



//This button leads you the page with the game, while recording the time needed for the game to be ended.
function showGame(){
    experimentTitle.innerText=firstWord+ " "+ secondWord +" " + thirdWord;
    mainPage.hidden = true;
    identifierToStudy.hidden =true;
    start = Date.now();
    content.disabled = false;
    content.hidden = false;
    let shuffledArray = shuffleArr(identifierAndDistractors);
    const elementArr = [identifier0, identifier1, identifier2, identifier3];
    for (let i = 0; i < elementArr.length; i++) {
        let para1 = document.createElement("p");
        let para2 = document.createElement("p");
        para1.innerText = shuffledArray[i].identifierValue;
        para2.innerText = shuffledArray[i].arrayPosition;
        elementArr[i].appendChild(para1);
        elementArr[i].appendChild(para2);
    }
}


nextButton.addEventListener("click", showIdentifier);
document.addEventListener("keydown",e =>{
    if(e.key === "Enter"){
        showGame();
    }
    else{
        e.preventDefault();
        return false;
    }
});
document.addEventListener("keydown", keydownEventHandler);



downloadButton.addEventListener("click",()=> {
    downloadButton.disabled = false;
    downloadButton.hidden = false;
    csvData.forEach(row => {
        csv += row.join(';') + '\n'
    })
    let hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "Experiment Results.csv";
    hiddenElement.click();
});



function keydownEventHandler(e) {
    let arr = [];
    let answer = false;
    if (e.key === "0") {
        end =Date.now();
        answer = (identifierAndDistractors[0].identifierValue === identifier);
    }
    else if (e.key === "1") {
        end =Date.now();
        answer = (identifierAndDistractors[1].identifierValue === identifier);
    }
    else if (e.key === "2") {
        end =Date.now();
        answer = (identifierAndDistractors[2].identifierValue === identifier);
    }
    else if (e.key === "3") {
        end =Date.now();
        answer = (identifierAndDistractors[3].identifierValue === identifier);
    }
    else {e.preventDefault();
        return false;}

    arr.push(style, numberOfWords, answer, (end-start));
        csvData.push(arr);
        if(camelCase+underScore === 300){
            experimentTitle.innerText = "Moving Text Experiment";
            document.removeEventListener("keydown", keydownEventHandler);
            mainPage.hidden = false;
            mainPage.innerHTML =("You have successfully completed the Experiment. " +
                "Thank you for your participation. " +
                "Click on the button below to download your experiment results")
            downloadButton.disabled = false;
            downloadButton.hidden = false;
            identifier0.hidden = true;
            identifier1.hidden = true;
            identifier2.hidden = true;
            identifier3.hidden = true;
            content.disabled = true;
            content.hidden =true;
        }
        else{
            mainPage.hidden = false;
            identifierToStudy.hidden =false;
            identifier0.textContent = "";
            identifier1.textContent = "";
            identifier2.textContent = "";
            identifier3.textContent = "";
            identifierToStudy.innerHTML = "";
            showIdentifier();
        }
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function generateDistractors(firstWord, secondWord, thirdWord, style){
    identifierAndDistractors = [];
    let difference = 0;
    let distractorWord ="";
    distractor1 ="";
    distractor2 = "";
    distractor3 = "";
    if(thirdWord === "") {
        for (let i = 0; i < dictionary.length; i++) {
            distractorWord = dictionary[i];
            difference = 0;
            //changing the first word of the identifier
            if (distractorWord.length === firstWord.length) {
                if(distractor1 === ""){
                    if (distractorWord.charAt(0) === firstWord.charAt(0)) {
                        if (distractorWord.charAt(distractorWord.length - 1) === firstWord.charAt(firstWord.length - 1 ) || distractorWord.charAt(1) === firstWord.charAt( 1 ) ) {
                            for (let j = 1; j < firstWord.length; j++) {
                                // go from 2nd to one but last character index the words
                                if (distractorWord.charAt(j) !== firstWord.charAt(j)) {
                                    // if this character from word 1 does not equal the character from word 2
                                    difference++; // increase the difference
                                }
                            }
                            if (difference === 1 || difference === 2) {
                               distractor1 =  buildDistractor(style,distractorWord,secondWord,thirdWord);
                            }
                        }
                    }
                }
            }

            //changing the second word
            if (distractorWord.length === secondWord.length) {
                if(distractor2 === "") {
                    if (distractorWord.charAt(0) !== secondWord.charAt(0) && distractorWord.charAt(1) === secondWord.charAt(1)) {
                            if (distractorWord.charAt(secondWord.length - 1) === secondWord.charAt(secondWord.length - 1)) {
                                if(distractorWord.charAt(2) === secondWord.charAt(2)) {
                                    distractor2 = buildDistractor(style, firstWord, distractorWord, thirdWord);
                                    if (distractorWord.charAt(secondWord.length - 2) === secondWord.charAt(secondWord.length - 2)) {
                                        distractor2 = buildDistractor(style, firstWord, distractorWord, thirdWord);
                                        if (distractorWord.charAt(secondWord.length - 3) === secondWord.charAt(secondWord.length - 3)) {
                                            distractor2 = buildDistractor(style, firstWord, distractorWord, thirdWord);
                                        }
                                    }
                                }
                            }
                        else {
                            for (let j = 2; j < secondWord.length; j++) {
                                // go from 2nd to  last character index the words
                                if (distractorWord.charAt(j) !== secondWord.charAt(j)) {
                                    // if this character from word 1 does not equal the character from word 2
                                    difference++; // increase the difference
                                }
                            }
                            if (difference === 0) {
                                distractor2 = buildDistractor(style, firstWord, distractorWord, thirdWord);
                            }
                        }
                    }
                }
            }

            //making the 3rd distractor
            if(distractorWord.length === secondWord.length - 1){
                if (distractor3 === "") {
                    if (distractorWord.charAt(0) === secondWord.charAt(0) && distractorWord.charAt(1) === secondWord.charAt(1) ) {
                        for (let j = 1; j < secondWord.length - 1; j++) {
                            // go from 2nd to  last character index the words
                            if (distractorWord.charAt(j) !== secondWord.charAt(j)) {
                                // if this character from word 1 does not equal the character from word 2
                                difference++; // increase the difference
                            }
                        }
                        if (difference === 1 || difference === 0 || difference === 2) {
                            distractor3 = buildDistractor(style,firstWord,distractorWord,thirdWord);
                        }
                    }
                }
            }
        }
    }
   else{
        for (let i = 0; i < dictionary.length; i++) {
            difference = 0;
            distractorWord = dictionary[i];
            //changing the first word of the identifier
            if (distractorWord.length === firstWord.length) {
                if(distractor1 === ""){
                    if (distractorWord.charAt(0) === firstWord.charAt(0)) {
                        if (distractorWord.charAt(distractorWord.length - 1) === firstWord.charAt(firstWord.length - 1 ) || distractorWord.charAt(1) === firstWord.charAt( 1 ) ) {
                            for (let j = 1; j < firstWord.length; j++) {
                                // go from 2nd to one but last character index the words
                                if (distractorWord.charAt(j) !== firstWord.charAt(j)) {
                                    // if this character from word 1 does not equal the character from word 2
                                    difference++; // increase the difference
                                }
                            }
                            if (difference === 2) {
                                distractor1 = buildDistractor(style,distractorWord,secondWord,thirdWord);
                            }
                        }
                    }
                }
            }

            //changing the second word
            if (distractorWord.length === secondWord.length) {
                if(distractor2 === "") {
                    if (distractorWord.charAt(0) === secondWord.charAt(0) && distractorWord.charAt(distractorWord.length-1) === secondWord.charAt(distractorWord.length-1)) {
                        for (let j = 1; j < secondWord.length; j++) {
                            // go from 2nd to  last character index the words
                            if (distractorWord.charAt(j) !== secondWord.charAt(j)) {
                                // if this character from word 1 does not equal the character from word 2
                                difference++; // increase the difference
                            }
                        }
                        if (difference === 2 || difference === 1 || difference === 3) {
                            distractor2 = buildDistractor(style,firstWord,distractorWord,thirdWord);
                        }
                    }
                }
            }

            //making the 3rd distractor
            if(distractorWord.length === thirdWord.length){
                if (distractor3 === "") {
                    if (distractorWord.charAt(distractorWord.length-1) !== thirdWord.charAt(thirdWord.length-1)) {
                        if (distractorWord.charAt(0) === thirdWord.charAt(0) && distractorWord.charAt(1) === thirdWord.charAt(1) ) {
                            if (distractorWord.charAt(2) === thirdWord.charAt(2)) {
                                distractor3 = buildDistractor(style, firstWord, secondWord, distractorWord);
                                if (distractorWord.charAt(thirdWord.length - 2) === thirdWord.charAt(thirdWord.length - 2)) {
                                    distractor3 = buildDistractor(style, firstWord, secondWord, distractorWord);
                                    if (distractorWord.charAt(thirdWord.length - 3) === thirdWord.charAt(thirdWord.length - 3)) {
                                        distractor3 = buildDistractor(style, firstWord, secondWord, distractorWord);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    identifierAndDistractors.push(new IdentifierAndAttributes(style,distractor1,identifierAndDistractors.length));
    identifierAndDistractors.push(new IdentifierAndAttributes(style,distractor2,identifierAndDistractors.length));
    identifierAndDistractors.push(new IdentifierAndAttributes(style,distractor3,identifierAndDistractors.length));
}



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        array[currentIndex].arrayPosition = randomIndex;
        array[randomIndex].arrayPosition = currentIndex;
    }

    return array;
}
function shuffleArr (array){
    let pos = 0;
    for (let i = array.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        pos = array[i].arrayPosition;
       array[i].arrayPosition = rand;
       array[rand].arrayPosition = pos;
       [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
}
function buildDistractor(style, word1, word2, word3){
    let distractor = "";
        if (style === "Camelcase") {
            if(word3 !=="") {
                distractor = word1 + word2.charAt(0).toUpperCase() + word2.slice(1) + word3.charAt(0).toUpperCase() + word3.slice(1);
            }
            else{ distractor = word1 + word2.charAt(0).toUpperCase() + word2.slice(1)}
        } else {
            if(word3 !=="") {
                distractor = word1 + "_" + word2 + "_" + word3;
            }
            else{distractor = word1 + "_" + word2;}
        }
    return distractor;
}



