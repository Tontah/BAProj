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
let mode = document.querySelector(".experimentTitle h2");
let experimentStartTime = 0;
let experimentEndTime = 0;
let csvData = [["Style","Number of words","correct answer number","Key pressed","Answer","Time(ms)"]];
let camelCase = 0;
let underScore = 0;
const identifierStyle = ["Camelcase", "Underscore"];
const noOfWords = [2, 3];
let csv = "";
let rng = new Math.seedrandom("hello");
let style = "";
let numberOfWords =0;
const identifier0 = document.querySelector(".identifier0");
const identifier1 = document.querySelector(".identifier1");
const identifier2 = document.querySelector(".identifier2");
const identifier3 = document.querySelector(".identifier3");
let firstWord = "";
let secondWord = "";
let thirdWord = "";
let breakMeasureStart = 0;
let breakMeasureEnd = 0;
let experimentRounds = 1000;
let para1 = document.createElement("p");
let para2 = document.createElement("p");
let para3 = document.createElement("p");
let para4 = document.createElement("p");



downloadButton.disabled = true;
downloadButton.hidden = true;
content.disabled = true;
content.hidden = true;
mode.hidden = true


//function to show the identifier to be studied
function showIdentifier(){
    thirdWord = "";
    identifier = "";
    identifierAndDistractors.length = 0;
    mainPage.innerHTML = "";
    nextButton.disabled = true;
    nextButton.hidden = true;
    content.disabled = true;
    content.hidden = true;
    para1.innerText = "Below, you will see an sentence, please study/memorize this.";
    para2.innerText = "place your hand on the num keys and keep your hand there till the experiment ends.";
    para3.innerText = "Press the number showing above the text with the identifier(containing thesame words) that matches the sentence you just saw.";
    para4.innerText = "Then you press enter to proceed. The sentence will still be showing at the top of the page for reference.";
    mainPage.appendChild(para1);
    mainPage.appendChild(para2);
    mainPage.appendChild(para3);
    mainPage.appendChild(para4);
    style = identifierStyle[arrayPosition(identifierStyle.length)];
   numberOfWords = noOfWords[arrayPosition(noOfWords.length)];
    for (let i = 0; i < numberOfWords; i++) {
        let word = words[arrayPosition(words.length)];
        if(word.length>3) {
            if (style === "Camelcase" && camelCase < (experimentRounds/2)) {
                if (i !== 0) {
                    identifier = identifier + word.charAt(0).toUpperCase() + word.slice(1);
                    if (i === 1) {
                        secondWord = word;
                    } else if (i === 2) {
                        thirdWord = word;
                        console.log("identifier = " + identifier);
                    }
                } else {
                    identifier = word;
                    firstWord = word;
                }
            } else {
                if (style === "Camelcase") {
                    style = "Underscore";
                }
                if (i !== 0) {
                    identifier = identifier + "_" + word;
                    if (i === 1) {
                        secondWord = word;
                    } else if (i === 2) {
                        thirdWord = word;
                    }
                } else {
                    identifier = word;
                    firstWord = word;
                }
            }
        }
        else{
            i--;
        }
    }
    if(style === "Underscore"){
        underScore++;
    }
    else {camelCase++;}
    identifierAndDistractors.push(new IdentifierAndAttributes(style, (buildDistractor(style,
        generateFirstDistractor(firstWord, thirdWord),secondWord,thirdWord)),identifierAndDistractors.length));
    identifierAndDistractors.push(new IdentifierAndAttributes(style,(buildDistractor(style,firstWord,
        generateSecondDistractor(secondWord, thirdWord),thirdWord)),identifierAndDistractors.length));
    if(numberOfWords === 2){
        identifierAndDistractors.push(new IdentifierAndAttributes(style, (buildDistractor(style,firstWord,
            generateThirdDistractor(secondWord, thirdWord), thirdWord)),identifierAndDistractors.length));
    }else {
        identifierAndDistractors.push(new IdentifierAndAttributes(style, (buildDistractor(style,
            firstWord, secondWord, generateThirdDistractor(secondWord, thirdWord))), identifierAndDistractors.length));
    }
    identifierAndDistractors.push(new IdentifierAndAttributes(style,identifier,identifierAndDistractors.length));

    let nodeForH1 = document.createTextNode(firstWord + " " + secondWord + " " + thirdWord);
    identifierToStudy.appendChild(nodeForH1);
}



//This button leads you the page with the game, while recording the time needed for the game to be ended.
function showGame(){
    experimentTitle.innerText=firstWord+ " "+ secondWord +" " + thirdWord;
    mainPage.hidden = true;
    identifierToStudy.hidden =true;
    experimentStartTime = Date.now();
    content.disabled = false;
    content.hidden = false;
    let shuffledArray = shuffleArr(identifierAndDistractors);
    const elementArr = [identifier0, identifier1,identifier2, identifier3];
    for (let i = 0; i < elementArr.length; i++) {
        let para1 = document.createElement("p");
        let para2 = document.createElement("p");
        para1.innerText = shuffledArray[i].identifierValue;
        para2.innerText = shuffledArray[i].arrayPosition;
        elementArr[i].appendChild(para2);
        elementArr[i].appendChild(para1);
    }
    breakMeasureStart = breakMeasureStart+experimentStartTime;
}


nextButton.addEventListener("click", training);
document.addEventListener("keydown",enterKeyEvent)
function enterKeyEvent(e){
    if((e.key === "Enter" && nextButton.hidden === true && experimentTitle.innerText === "TRAINING MODE")||(e.key === "Enter" && nextButton.hidden === true && experimentTitle.innerText === "Moving Text Experiment")){
        showGame();
    }
    else if((e.key === "Enter" && experimentTitle.innerText === "BREAK TIME") || (e.key === "Enter" && experimentTitle.innerText === "TRAINING MODE COMPLETED")){
        experimentTitle.innerText = "Moving Text Experiment";
        identifierToStudy.innerHTML = "";
        showIdentifier();
    }
    else{
        e.preventDefault();
        return false;
    }
}
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
    let expTitle = experimentTitle.innerText;
    let answer = false;
    let arr = [];
    let rightAnswerPosition =0
    if(expTitle=== "Moving Text Experiment" || expTitle.includes("TRAINING MODE")){
        e.preventDefault();
        return false;
    }
    if (e.key === "0") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistractors[0].identifierValue === identifier);
    }
    else if (e.key === "1") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistractors[1].identifierValue === identifier);
    }
    else if (e.key === "2") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistractors[2].identifierValue === identifier);
    }
    else if (e.key === "3") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistractors[3].identifierValue === identifier);
    }
    else {e.preventDefault();
        return  false;
        }

    if(mode.innerText === "training"){
            mainPage.hidden = false;
            identifier0.textContent = "";
            identifier1.textContent = "";
            identifier2.textContent = "";
            identifier3.textContent = "";
            identifierToStudy.hidden = false;
            identifierToStudy.innerHTML = "";
            if (camelCase + underScore === 30) {
                experimentTitle.innerText = "TRAINING MODE COMPLETED";
                para1.innerText = "Congratulations, you just completed the TRAINING.";
                para2.innerText = "You can take a 5-10 minutes break now.";
                para3.innerText = "Relax, drink a glass of water or a cup of coffee, or any drink.";
                para4.innerText = "Then you press enter to proceed with the Experiment.";
                mainPage.appendChild(para1);
                mainPage.appendChild(para2);
                mainPage.appendChild(para3);
                mainPage.appendChild(para4);
                camelCase = 0;
                underScore = 0;
                mode.innerText = "Experimenting";
                breakMeasureEnd = 0;
                breakMeasureStart = 0;
            } else {
                experimentTitle.innerText = "TRAINING MODE";
                showIdentifier();
            }
    }
    else {
        for (let i = 0; i < identifierAndDistractors.length; i++) {
            if (identifierAndDistractors[i].identifierValue === identifier) {
                rightAnswerPosition = identifierAndDistractors[i].arrayPosition;
                break;
            }
        }
        breakMeasureEnd = breakMeasureEnd + experimentEndTime;

        arr.push(style, numberOfWords, rightAnswerPosition, e.key, answer, (experimentEndTime - experimentStartTime));
        csvData.push(arr);


        if (breakMeasureEnd - breakMeasureStart >= 600000) {
            experimentTitle.innerText = "BREAK TIME";
            mainPage.hidden = false;
            mainPage.innerHTML = ""
            identifierToStudy.hidden = false;
            identifier0.textContent = "";
            identifier1.textContent = "";
            identifier2.textContent = "";
            identifier3.textContent = "";
            identifierToStudy.innerHTML = "BREAK! BREAK! BREAK!";
            para1.innerText = "Congratulations, you have completed 15 minutes of the Experiment.";
            para2.innerText = "You can take a 5-10 minutes break now.";
            para3.innerText = "Relax, drink a glass of water or a cup of coffee, or any drink.";
            para4.innerText = "Then you press enter to proceed.";
            mainPage.appendChild(para1);
            mainPage.appendChild(para2);
            mainPage.appendChild(para3);
            mainPage.appendChild(para4);
            breakMeasureStart = Date.now();
            breakMeasureEnd = 0;
        }
        else {
            experimentTitle.innerText = "Moving Text Experiment";
            mainPage.hidden = false;
            if (camelCase + underScore === experimentRounds) {
                document.removeEventListener("keydown", keydownEventHandler);
                document.removeEventListener("keydown", enterKeyEvent);
                mainPage.innerHTML = ("You have successfully completed the Experiment. " +
                    "Thank you for your participation. " +
                    "Click on the button below to download your experiment results")
                downloadButton.disabled = false;
                downloadButton.hidden = false;
                identifier0.hidden = true;
                identifier1.hidden = true;
                identifier2.hidden = true;
                identifier3.hidden = true;
                content.disabled = true;
                content.hidden = true;
            } else {
                identifierToStudy.hidden = false;
                identifier0.textContent = "";
                identifier1.textContent = "";
                identifier2.textContent = "";
                identifier3.textContent = "";
                identifierToStudy.innerHTML = "";
                showIdentifier();
            }
        }
    }
}

function training(){
    mode.innerText = "training";
    experimentTitle.innerText = "TRAINING MODE";
    showIdentifier();
}

function generateFirstDistractor(firstWord, thirdWord){
    let difference = 0;
    let distractorWord = "";
    let wordLength =firstWord.length;
    let distractors = [[],[],[],[],[]]
    if (thirdWord === ""){
        for (let i = 0; i < dictionary.length; i++) {
            distractorWord = dictionary[i];
            difference = 0;
            //changing the first word of the identifier
            if (distractorWord.length === wordLength && distractorWord.charAt(0) === firstWord.charAt(0)) {
                for (let j=1; j< wordLength; j++) {
                    if (distractorWord.charAt(j) !== firstWord.charAt(j)) {
                        difference++;
                    }
                }
                if(difference === 1){
                    distractors[0].push(distractorWord);
                }
                else if(difference === 2){
                    distractors[1].push(distractorWord);
                }
                else if(difference === 3){
                    distractors[2].push(distractorWord);
                }
                else if(difference === 4){
                    distractors[3].push(distractorWord);
                }
            }
        }
        for(let i = 0; i<5; i++){
            if(distractors[i].length === 0){}
            else{
                return distractors[i][0];
            }
        }
    }
    else{
        for (let i = 0; i < dictionary.length; i++) {
            distractorWord = dictionary[i];
            difference = 0;
            if (distractorWord.length === firstWord.length && distractorWord.charAt(0) === firstWord.charAt(0)) {
                distractors[4].push(distractorWord);
                if(distractorWord.charAt(wordLength-1) === firstWord.charAt(wordLength-1)) {
                    for (let j = 1; j < wordLength - 1; j++) {
                        if (distractorWord.charAt(j) !== firstWord.charAt(j)) {
                            difference++;
                        }
                    }
                    if (difference === 2) {
                        distractors[0].push(distractorWord);
                    } else if (difference === 3) {
                        distractors[1].push(distractorWord);
                    } else if (difference === 1) {
                        distractors[2].push(distractorWord);
                    } else if (difference === 4) {
                        distractors[3].push(distractorWord);
                    }
                }
            }
        }
        for(let i=0 ; i<5; i++){
            if(distractors[i].length === 0){}
            else{
                return distractors[i][0];
            }
        }
    }
}

function generateSecondDistractor(secondWord, thirdWord){
    let difference = 0;
    let distractorWord = "";
    let wordLength =secondWord.length;
    let distractors = [[],[],[],[],[]];
    if (thirdWord === ""){
        for (let i = 0; i < dictionary.length; i++) {
            distractorWord = dictionary[i];
            difference = 0;
            if (distractorWord.length === wordLength && distractorWord.charAt(0) !== secondWord.charAt(0)) {
                distractors[4].push(distractorWord);
                for (let j=1; j< wordLength; j++) {
                    if (distractorWord.charAt(j) !== secondWord.charAt(j)) {
                        difference++;
                    }
                }
                if(difference === 0){
                    distractors[0].push(distractorWord);
                }
                else if(difference === 1){
                    distractors[1].push(distractorWord);
                }
                else if(difference === 2){
                    distractors[2].push(distractorWord);
                }
                else if(difference === 3){
                    distractors[3].push(distractorWord);
                }
            }
        }
        for(let i = 0; i<5; i++){
            if(distractors[i].length === 0){}
            else{
                return distractors[i][0];
            }
        }
    }
    else{
        for (let i = 0; i < dictionary.length; i++) {
            distractorWord = dictionary[i];
            difference = 0;
            if (distractorWord.length === secondWord.length && distractorWord.charAt(0) === secondWord.charAt(0)) {
                distractors[4].push(distractorWord);
                if(distractorWord.charAt(wordLength-1) === secondWord.charAt(wordLength-1)) {
                    for (let j = 1; j < wordLength - 1; j++) {
                        if (distractorWord.charAt(j) !== secondWord.charAt(j)) {
                            // here i use difference to measure the similarity between the two words not the difference
                            difference++;
                        }
                    }
                    if (difference === 2) {
                        distractors[0].push(distractorWord);
                    } else if (difference === 1) {
                        distractors[1].push(distractorWord);
                    } else if (difference === 3) {
                        distractors[2].push(distractorWord);
                    } else if (difference === 4) {
                        distractors[3].push(distractorWord);
                    }
                }
            }
        }
        for(let i =0 ; i<5; i++){
            if(distractors[i].length === 0){}
            else{
                return distractors[i][0];
            }
        }
    }
}

function generateThirdDistractor(secondWord, word3){
    let wordLength = 0;
    let difference = 0;
    let distractorWord = "";
    let distractors = [[],[],[],[],[]]
    if (word3 === ""){
        secondWord = secondWord.slice(0,secondWord.length-1);
        wordLength =secondWord.length;
        for (let i = 0; i < dictionary.length; i++) {
            distractorWord = dictionary[i];
            difference = 0;
            if (distractorWord.length === wordLength && distractorWord.charAt(0) === secondWord.charAt(0)) {
                for (let j=1; j< wordLength; j++) {
                    if (distractorWord.charAt(j) !== secondWord.charAt(j)) {
                        difference++;
                    }
                }
                if(difference === 0){
                    distractors[0].push(distractorWord);
                }
                else if(difference === 1){
                    distractors[1].push(distractorWord);
                }
                else if(difference === 2){
                    distractors[2].push(distractorWord);
                }
                else if(difference === 3){
                    distractors[3].push(distractorWord);
                }
            }
        }
        for(let i = 0; i<5; i++){
            if(distractors[i].length === 0){}
            else{
                return distractors[i][0];
            }
        }
    }
    else{
        for (let i = 0; i < dictionary.length; i++) {
            wordLength = thirdWord.length;
            distractorWord = dictionary[i];
            difference = 0;
            if (distractorWord.length === wordLength && distractorWord.charAt(0) === thirdWord.charAt(0)) {
                distractors[4].push(distractorWord);
                if(distractorWord.charAt(wordLength-1) === thirdWord.charAt(wordLength-1)) {
                    for (let j = 1; j < wordLength - 1; j++) {
                        if (distractorWord.charAt(j) !== thirdWord.charAt(j)) {
                            difference++;
                        }
                    }
                    if (difference === 2) {
                        distractors[0].push(distractorWord);
                    } else if (difference === 3) {
                        distractors[1].push(distractorWord);
                    } else if (difference === 1) {
                        distractors[2].push(distractorWord);
                    } else if (difference === 4) {
                        distractors[3].push(distractorWord);
                    }
                }
            }
        }
        for(let i=0 ; i<5; i++){
            if(distractors[i].length === 0){}
            else{
                return distractors[i][0];
            }
        }
    }
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
function arrayPosition(modulo){
    let position = rng.int32() %modulo;
    if (position < 0) {
        position = -1 * position;
    }
    return position;
}
 function exercise(){
    showIdentifier();

 }


