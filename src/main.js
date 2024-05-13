import {words} from "./word.js";
import {dictionary} from "./dictionary.js";
console.log(dictionary.length);

//constructor for identifierAndAttributes
function IdentifierAndAttributes(style, identifierValue, arrayPosition) {
    this.style = style;
    this.identifierValue = identifierValue;
    this.arrayPosition = arrayPosition;
}
let identifier = "";
let identifierAndDistracters =[];
const mainPage = document.querySelector(".mainPage");
let identifierToStudy  = document.querySelector(".identifierDiv h1");
let nextButton = document.querySelector(".btn button");
let downloadButton = document.querySelector(".downloadBtn button");
let content = document.querySelector(".content");
let experimentTitle = document.querySelector(".experimentTitle h1");
let mode = document.querySelector(".experimentTitle h2");
let titlesClass = document.querySelector(".experimentTitle");
let experimentStartTime = 0;
let experimentEndTime = 0;
let csvData = [["Style","Number of words","correct answer number","Key pressed","Answer","Time(ms)"]];
let camelCase = 0;
let underScore = 0;
const identifierStyle = ["Camelcase", "Underscore"];
const noOfWords = [2, 3];
let csv = "";
let rng = new Math.seedrandom("right");
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
let experimentRounds = 500;
let roundsCompleted = 1;
let roundsHeading = document.createElement("h1");



downloadButton.disabled = true;
downloadButton.hidden = true;
content.disabled = true;
content.hidden = true;
mode.hidden = true


//function to show the identifier to be studied
function showIdentifier(){
    thirdWord = "";
    identifier = "";
    identifierAndDistracters.length = 0;
    nextButton.disabled = true;
    nextButton.hidden = true;
    content.disabled = true;
    content.hidden = true;
    mainPage.innerText +=
        "Below, you will see a sentence, please study/memorize this.\n\n"+
        "place your fingers on the num keys as explained previously and keep your them there till the experiment ends.\n\n"+
        "On the next page,\n\n"+
        "press the number showing above the text with the identifier(containing the same phrases) that matches the sentence you just saw.\n\n"+
        "Then you press enter to proceed. The sentence will still be showing at the top of the page for reference.\n\n";
    style = identifierStyle[positionInArray(identifierStyle.length)];
   numberOfWords = noOfWords[positionInArray(noOfWords.length)];
    for (let i = 0; i < numberOfWords; i++) {
        let word = words[positionInArray(words.length)];
        if(word.length>3) {
            if (style === "Camelcase" && camelCase < (experimentRounds/2)) {
                if (i !== 0) {
                    identifier = identifier + word.charAt(0).toUpperCase() + word.slice(1);
                    if (i === 1) {
                        secondWord = word;
                    } else if (i === 2) {
                        thirdWord = word;
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


    identifierAndDistracters.push(new IdentifierAndAttributes(style, (buildDistracter(style,
        generateFirstDistracter(firstWord, thirdWord),secondWord,thirdWord)),identifierAndDistracters.length));
    identifierAndDistracters.push(new IdentifierAndAttributes(style,(buildDistracter(style,firstWord,
        generateSecondDistracter(secondWord, thirdWord),thirdWord)),identifierAndDistracters.length));
    if(numberOfWords === 2){
        identifierAndDistracters.push(new IdentifierAndAttributes(style, (buildDistracter(style,firstWord,
            generateThirdDistracter(secondWord, thirdWord), thirdWord)),identifierAndDistracters.length));
    }else {
        identifierAndDistracters.push(new IdentifierAndAttributes(style, (buildDistracter(style,
            firstWord, secondWord, generateThirdDistracter(secondWord, thirdWord))), identifierAndDistracters.length));
    }
    identifierAndDistracters.push(new IdentifierAndAttributes(style,identifier,identifierAndDistracters.length));

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
    let shuffledArray = shuffleArr(identifierAndDistracters);
    const elementArr = [identifier0, identifier1,identifier2, identifier3];
    for (let i = 0; i < elementArr.length; i++) {
        let para1 = document.createElement("p");
        let para2 = document.createElement("p");
        para1.innerText = shuffledArray[i].identifierValue;
        para2.innerText = shuffledArray[i].arrayPosition;
        elementArr[i].appendChild(para2);
        elementArr[i].appendChild(para1);
        para2.style.marginBottom = "0px";
        para1.style.marginTop = "0px";
        para2.style.marginTop = "80px";
    }
}


nextButton.addEventListener("click", training);
document.addEventListener("keydown",enterKeyEvent)
function enterKeyEvent(e){
    if((e.key === "Enter" && nextButton.hidden === true && experimentTitle.innerText === "TRAINING MODE")||
        (e.key === "Enter" && nextButton.hidden === true && experimentTitle.innerText === "REVISED CLOUD EXPERIMENT")){
        showGame();
    }
    else if((e.key === "Enter" && experimentTitle.innerText === "BREAK TIME") ||
        (e.key === "Enter" && experimentTitle.innerText === "TRAINING MODE COMPLETED")||
        (e.key === "Escape" && nextButton.hidden === false && experimentTitle.innerText === "REVISED CLOUD EXPERIMENT")){
        experimentTitle.innerText = "REVISED CLOUD EXPERIMENT";
        identifierToStudy.innerHTML = "";
        mainPage.innerHTML = "";
        roundsHeading.innerText = roundsCompleted + "/" + experimentRounds;
        roundsHeading.style.textAlign = "right";
        titlesClass.appendChild(roundsHeading);
        roundsCompleted++;
        breakMeasureStart = Date.now();
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

    if(expTitle === "REVISED CLOUD EXPERIMENT" || expTitle.includes("TRAINING MODE")){
        e.preventDefault();
        return false;
    }

    if (e.key === "0") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistracters[0].identifierValue === identifier);
    }
    else if (e.key === "1") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistracters[1].identifierValue === identifier);
    }
    else if (e.key === "2") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistracters[2].identifierValue === identifier);
    }
    else if (e.key === "3") {
        experimentEndTime =Date.now();
        answer = (identifierAndDistracters[3].identifierValue === identifier);
    }
    else {e.preventDefault();
        return  false;
    }
    mainPage.innerHTML = "";


    if(mode.innerText === "training"){
            mainPage.hidden = false;
            identifier0.textContent = "";
            identifier1.textContent = "";
            identifier2.textContent = "";
            identifier3.textContent = "";
            identifierToStudy.hidden = false;
            identifierToStudy.innerHTML = "";
            roundsCompleted++;
            roundsHeading.innerText = roundsCompleted + "/" + 30;
            if (roundsCompleted === 30) {
                experimentTitle.innerText = "TRAINING MODE COMPLETED";
                mainPage.innerText = "Congratulations, you just completed the TRAINING.\n\n"+
                    "You can take a 10-15 minutes break now.\n\n"+
                    "Relax, drink a glass of water or a cup of coffee, or any drink.\n\n"+
                    "Then you press enter to proceed with the Experiment.\n\n";
              breakMeasureStart = camelCase = underScore = 0;
                roundsCompleted = 1;
                mode.innerText = "Experimenting";
            } else {
                experimentTitle.innerText = "TRAINING MODE";
                showIdentifier();
            }
    }
    else {
        for (let i = 0; i < identifierAndDistracters.length; i++) {
            if (identifierAndDistracters[i].identifierValue === identifier) {
                rightAnswerPosition = identifierAndDistracters[i].arrayPosition;
                break;
            }
        }

        arr.push(style, numberOfWords, rightAnswerPosition, e.key, answer, (experimentEndTime - experimentStartTime));
        csvData.push(arr);

        if (experimentEndTime - breakMeasureStart >= 600000) {
            experimentTitle.innerText = "BREAK TIME";
            mainPage.hidden = false;
            mainPage.innerHTML = ""
            identifierToStudy.hidden = false;
            identifier0.textContent = "";
            identifier1.textContent = "";
            identifier2.textContent = "";
            identifier3.textContent = "";
            identifierToStudy.innerHTML = "BREAK! BREAK! BREAK!";
            mainPage.innerText = "Congratulations, you have completed 15 minutes of the Experiment.\n\n"+
                "You can take a 10-15 minutes break now.\n\n"+
                "Relax, drink a glass of water or a cup of coffee, or any drink.\n\n"+
                "Then you press enter to proceed with the Experiment.\n\n";
            breakMeasureStart = 0;
        }
        else {
            experimentTitle.innerText = "REVISED CLOUD EXPERIMENT";
            mainPage.hidden = false;
            if (camelCase + underScore === experimentRounds) {
                document.removeEventListener("keydown", keydownEventHandler);
                document.removeEventListener("keydown", enterKeyEvent);
                mainPage.innerHTML = ("You have successfully completed the Experiment.\n\n" +
                    "Thank you for your participation.\n\n" +
                    "Click on the button below to download your experiment results\n\n");
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
                roundsHeading.innerText = roundsCompleted + "/" + experimentRounds;
                titlesClass.appendChild(roundsHeading);
                roundsCompleted++;
                showIdentifier();
            }
        }
    }
}

function training(){
    mode.innerText = "training";
    experimentTitle.innerText = "TRAINING MODE";
    mainPage.innerText = "Place your fingers on the number keys as follows;\n\n"+
    "The thumb on the zero-key,\n\n"+
    "The index finger on the one-key,\n\n"+
    "The middle finger on the two-key,\n\n"+
    "The ring finger on the three-key, and\n\n"+
    "The little finger on the enter-key.\n\n";
    roundsHeading.innerText = roundsCompleted + "/" + "30";
    roundsHeading.style.textAlign = "right";
    titlesClass.appendChild(roundsHeading);
    showIdentifier();
}

function generateFirstDistracter(firstWord, thirdWord){
    let difference = 0;
    let distracterWord = "";
    let wordLength =firstWord.length;
    let distracters = [[],[],[],[],[]]
    if (thirdWord === ""){
        for (let i = 0; i < dictionary.length; i++) {
            distracterWord = dictionary[i];
            difference = 0;
            //changing the first word of the identifier
            if (distracterWord.length === wordLength && distracterWord.charAt(0) === firstWord.charAt(0)) {
                for (let j=1; j< wordLength; j++) {
                    if (distracterWord.charAt(j) !== firstWord.charAt(j)) {
                        difference++;
                    }
                }
                fillingDistractersArrays(1,2,3,4,difference,distracters,distracterWord);
            }
        }
        for(let i = 0; i<5; i++){
            if(distracters[i].length === 0){}
            else{
                return distracters[i][0];
            }
        }
    }
    else{
        for (let i = 0; i < dictionary.length; i++) {
            distracterWord = dictionary[i];
            difference = 0;
            if (distracterWord.length === firstWord.length && distracterWord.charAt(0) === firstWord.charAt(0)) {
                distracters[4].push(distracterWord);
                if(distracterWord.charAt(wordLength-1) === firstWord.charAt(wordLength-1)) {
                    for (let j = 1; j < wordLength - 1; j++) {
                        if (distracterWord.charAt(j) !== firstWord.charAt(j)) {
                            difference++;
                        }
                    }
                    fillingDistractersArrays(2,3,1,4,difference,distracters,distracterWord);
                }
            }
        }
        for (let i = 0; i < distracters[4].length; i++) {
            distracterWord = distracters[4][i];
            difference = 0;
            if (distracterWord.charAt(1) === firstWord.charAt(1)) {
                for (let j = 2; j < wordLength; j++) {
                    if (distracterWord.charAt(j) !== firstWord.charAt(j)) {
                        difference++;
                    }
                }
                fillingDistractersArrays(2,3,1,4,difference,distracters,distracterWord);
            }
        }
        for(let i=0 ; i<5; i++){
            if(distracters[i].length === 0){}
            else{
                return distracters[i][0];
            }
        }
    }
}

function generateSecondDistracter(secondWord, thirdWord){
    let difference = 0;
    let distracterWord = "";
    let wordLength =secondWord.length;
    let distracters = [[],[],[],[],[]];
    if (thirdWord === ""){
        for (let i = 0; i < dictionary.length; i++) {
            distracterWord = dictionary[i];
            difference = 0;
            if (distracterWord.length === wordLength && distracterWord.charAt(0) !== secondWord.charAt(0)) {
                distracters[4].push(distracterWord);
                for (let j=1; j< wordLength; j++) {
                    if (distracterWord.charAt(j) !== secondWord.charAt(j)) {
                        difference++;
                    }
                }
                fillingDistractersArrays(0,1,2,3,difference,distracters,distracterWord);
            }
        }
        for(let i = 0; i<5; i++){
            if(distracters[i].length === 0){}
            else{
                return distracters[i][0];
            }
        }
    }
    else{
        for (let i = 0; i < dictionary.length; i++) {
            distracterWord = dictionary[i];
            difference = 0;
            if (distracterWord.length === secondWord.length && distracterWord.charAt(0) === secondWord.charAt(0)) {
                distracters[4].push(distracterWord);
                if (distracterWord.charAt(wordLength - 1) === secondWord.charAt(wordLength - 1)) {
                    for (let j = 1; j < wordLength - 1; j++) {
                        if (distracterWord.charAt(j) !== secondWord.charAt(j)) {
                            // here i use difference to measure the similarity between the two words not the difference
                            difference++;
                        }
                    }
                    fillingDistractersArrays(2, 3, 1, 4, difference, distracters, distracterWord);
                }
            }
        }
        console.log(distracters[4]);
        for (let i = 0; i < distracters[4].length; i++) {
            distracterWord = distracters[4][i];
            difference = 0;
            if (distracterWord.charAt(1) === secondWord.charAt(1)) {
                for (let j = 2; j < distracterWord.length; j++) {
                    if (distracterWord.charAt(j) !== firstWord.charAt(j)) {
                        difference++;
                    }
                }
                fillingDistractersArrays(2,3,4,5,difference,distracters,distracterWord);
            }
        }
        for(let i =0 ; i<5; i++){
            if(distracters[i].length === 0){}
            else{
                return distracters[i][0];
            }
        }
    }
}

function generateThirdDistracter(secondWord, word3){
    let wordLength = 0;
    let difference = 0;
    let distracterWord = "";
    let distracters = [[],[],[],[],[]]
    if (word3 === ""){
        let word = secondWord;
        secondWord = secondWord.slice(0,secondWord.length-1);
        wordLength =secondWord.length;
        for (let i = 0; i < dictionary.length; i++) {
            distracterWord = dictionary[i];
            difference = 0;
            if (distracterWord.length === wordLength && distracterWord.charAt(0) === secondWord.charAt(0)) {
                if(distracterWord.charAt(wordLength-1) === word.charAt(word.length-1)){
                    for (let j=1; j< wordLength-1; j++) {
                        if (secondWord.includes(distracterWord.charAt(j))) {}
                            else difference++;
                    }
                    fillingDistractersArrays(0,1,2,3,difference,distracters,distracterWord);
                }
                else {
                    distracters[4].push(distracterWord);
                    for (let j = 1; j < wordLength; j++) {
                        if (distracterWord.charAt(j) !== secondWord.charAt(j)) {
                            difference++;
                        }
                    }
                    fillingDistractersArrays(0, 1, 2, 3, difference, distracters, distracterWord);
                }
            }
        }
        for(let i = 0; i<5; i++){
            if(distracters[i].length === 0){}
            else{
                return distracters[i][0];
            }
        }
    }
    else{
        for (let i = 0; i < dictionary.length; i++) {
            wordLength = thirdWord.length;
            distracterWord = dictionary[i];
            difference = 0;
            if (distracterWord.length === wordLength && distracterWord.charAt(0) === thirdWord.charAt(0)) {
                distracters[4].push(distracterWord);
                if(distracterWord.charAt(wordLength-1) !== thirdWord.charAt(wordLength-1)) {
                    for (let j = 1; j < wordLength - 1; j++) {
                        if (distracterWord.charAt(j) !== thirdWord.charAt(j)) {
                            difference++;
                        }
                    }
                    fillingDistractersArrays(0,1,2,3,difference,distracters,distracterWord);
                }
            }
        }
        for (let i = 0; i < distracters[4].length; i++) {
            distracterWord = distracters[4][i];
            difference = 0;
            for (let j = 1; j < wordLength; j++) {
                if (distracterWord.charAt(j) !== thirdWord.charAt(j)) {
                    difference++;
                }
            }
                fillingDistractersArrays(1,2,3,4,difference,distracters,distracterWord);
        }
        for(let i=0 ; i<5; i++){
            if(distracters[i].length === 0){}
            else{
                return distracters[i][0];
            }
        }
    }
}


function  makePositive(number){
    if(number<0){
        number = number * -1;
    }
    return number;
}
function shuffleArr (array){
    let compare = "";
    let arr = [];
    let counter = 4;
    let position = 0;
    while (counter !== 0) {
        position = positionInArray(4);
        if (compare.includes(position.toString())) {}
        else {
            array[position].arrayPosition = arr.length;
            arr.push(array[position]);
            compare += position;
            counter--;
        }
    }
    identifierAndDistracters = arr;
    return arr;
}
function buildDistracter(style, word1, word2, word3){
    let distracter = "";
        if (style === "Camelcase") {
            if(word3 !=="") {
                distracter = word1 + word2.charAt(0).toUpperCase() + word2.slice(1) + word3.charAt(0).toUpperCase() + word3.slice(1);
            }
            else{ distracter = word1 + word2.charAt(0).toUpperCase() + word2.slice(1)}
        } else {
            if(word3 !=="") {
                distracter = word1 + "_" + word2 + "_" + word3;
            }
            else{distracter = word1 + "_" + word2;}
        }
    return distracter;
}
function positionInArray(modulo){
    let position = rng.int32() %modulo;
    position = makePositive(position);
    return position;
}

function fillingDistractersArrays(A,B,C,D, difference, distracters, distracterWord){
    if (difference === A) {
        distracters[0].push(distracterWord);
    } else if (difference === B) {
        distracters[1].push(distracterWord);
    } else if (difference === C) {
        distracters[2].push(distracterWord);
    } else if (difference === D) {
        distracters[3].push(distracterWord);
    }
}


