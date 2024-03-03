import {words} from "./word";

/*let identifiers = ["startTime", "extendAliasTable", "riverBank",
    "movieTheaterTicket", "full_pathname", "get_next_path", "drive_fast",
    "read_bedtime_story"]; // Array to hold identifiers
let identifierAndDistractions = [
    ["startTom", "smartTime", "startMime", "startTime"],
    ["extendAlistTable", "expandAliasTable", "extendAliasTable", "extendAliasTitle"],
    ["riserBank", "riverBank", "riverTank", "riverban"],
    ["mouseTheaterTicket", "movieTheaterTicket", "movieThunderTicket", "movieTheaterTicker"],
    ["full_pathnum", "fill_pathname", "full_mathname", "full_pathname"],
    ["get_next_path", "got_next_path", "get_near_path", "gat_next_push"],
    ["drive_last", "drove_fast", "drive_fast", "drive_fat"],
    ["read_bedtime_store", "raid_bedtime_story", "read_bedsore_story", "read_bedtime_story"]]; // Array to hold identifiers and their distractors*/
let identifier = "";
let identifierAndDistractors =[];
const mainPage = document.querySelector(".mainPage");
let identifierToStudy  = document.querySelector(".identifierDiv h1");
let nextButton = document.querySelector(".btn button");
let expButton = document.querySelector(".expBtn button");
let downloadButton = document.querySelector(".downloadBtn button");
let content = document.querySelector(".content")
let arrayPosition = 0;
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
expButton.disabled = true;
expButton.hidden = true;
downloadButton.disabled = true;
downloadButton.hidden = true;
let style = "";
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
let numberOfWords =0;

//function to show the identifier to be studied
function showIdentifier(){
    mainPage.innerHTML = "";
    nextButton.disabled = true;
    nextButton.hidden = true;
    expButton.disabled = false;
    expButton.hidden = false;
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    para1.innerText = "Below, you will see an identifier, please study/memorize this."
    para2.innerText = "Click on NEXT when that is done to start the experiment."
    mainPage.appendChild(para1);
    mainPage.appendChild(para2);
    style = identifierStyle[getRandomInt(1000)%identifierStyle.length];
   console.log("style = "+style)
   numberOfWords = noOfWords[getRandomInt(1000)%noOfWords.length];
   console.log("number of word = " +numberOfWords);
    let identifierAndDistractor1 = "";
    let identifierAndDistractor2 = "";
    let identifierAndDistractor3 = "";
    let firstWord = "";
    let secondWord = "";
    let thirdWord = "";
    for (let i = 0; i < numberOfWords; i++) {
        let position = rng.int32() % words.length;
        if (position < 0) {
            position = -1 * position;
        }
        if (style === "Camelcase" && camelCase <125) {
            if (i !== 0) {
                identifier = identifier + words[position].charAt(0).toUpperCase() + words[position].slice(1);
                if(i === 1){
                    secondWord = words[position];
                }
                else if(i === 2){
                    thirdWord = words[position];
                }
            } else {
                identifier = words[position];
                firstWord =words[position];
            }
        }
        else {
            if (style === "Camelcase"){style = "Underscore";}
            if (i !== 0) {
                identifier = identifier + "_" + words[position]
                if(i === 1){
                    secondWord = words[position];
                }
                else if(i === 2){
                    thirdWord = words[position];
                }
            } else {
                identifier = words[position];
                firstWord =words[position];
            }
        }
    }
    if(style === "Underscore"){
        underScore++;
    }
    else {camelCase++;}
    generateDistractors(firstWord, secondWord, thirdWord, style);
    console.log("identifier ="+identifier)
    identifierAndDistractors.push(identifier);

    let nodeForH1 = document.createTextNode(identifier);
    console.log("nodeForH! = "+nodeForH1.textContent);
    identifierToStudy.appendChild(nodeForH1);
    console.log(identifierAndDistractors);
    console.log("Shuffle array = " + shuffleArr(identifierAndDistractors));
}

//This button leads you the page with the game, while recording the time needed for the game to be ended.
function showGame(){
    mainPage.hidden = true;
    identifierToStudy.hidden =true;
    expButton.hidden = true;
    start = Date.now();

    let tagCloud = TagCloud(content, shuffleArr(identifierAndDistractors),{
        // radius in px
        radius: 200,
        // animation speed(slow, normal, fast)
        maxSpeed: "normal",
        initSpeed: "normal",
        // 0 = top, 90 = left, 135 = right-bottom
        direction: 0,
        keep: true,
    });
}

    nextButton.addEventListener("click", showIdentifier);
    expButton.addEventListener("click", showGame);
    content.addEventListener('click', clickEventHandler);

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

function clickEventHandler(e) {
    if (e.target.className === 'tagcloud--item') {
        end =Date.now();
        let arr = [];
        arr.push(style, numberOfWords, (e.target.textContent === identifier), (end-start));
        csvData.push(arr);
        if(camelCase+underScore === 250){
            mainPage.hidden = false;
            mainPage.innerHTML =("You have successfully completed the Experiment. " +
                "Thank you for your participation. " +
                "Click on the button below to download your experiment results")
            downloadButton.disabled = false;
            downloadButton.hidden = false;
            expButton.disabled = true;
            expButton.hidden = true;
            content.disabled = true;
            content.hidden =true;
        }
        else{
            mainPage.hidden = false;
            identifierToStudy.hidden =false;
            expButton.hidden = false;
            content.innerHTML = "";
            identifierToStudy.innerHTML = "";
            showIdentifier();
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generateDistractors(firstWord, secondWord, thirdWord, style){
    identifierAndDistractors = [];
    if(style === "Camelcase"){
        if(thirdWord === "") {
            distractor1 = firstWord + secondWord.charAt(0).toUpperCase()
                + changeLetter(secondWord.slice(1),0);
            distractor2 = changeLetter(firstWord,1) + secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
            distractor3 = firstWord + secondWord.charAt(0).toUpperCase()
                + changeLetter(secondWord.slice(1, secondWord.length-1), secondWord.slice(1, secondWord.length-1).length-1);
                //secondWord.slice(1).replace(secondWord.charAt(1), firstWord.charAt(3)) ;
        }
        else{
            distractor1 = firstWord + changeLetter(secondWord,0).charAt(0).toUpperCase()
                + secondWord.slice(1) + thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1);
            distractor2 = changeLetter(firstWord,1) + secondWord.charAt(0).toUpperCase()
                + secondWord.slice(1) + thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1);
            distractor3 = firstWord + secondWord.charAt(0).toUpperCase() + secondWord.slice(1) +thirdWord.charAt(0).toUpperCase()
                + changeLetter(thirdWord.slice(1, thirdWord.length-1),thirdWord.slice(1, thirdWord.length-1).length-1) ;
        }
    }
    else if(style === "Underscore"){
        if(thirdWord === "") {
            distractor1 = firstWord +"_"+ changeLetter(secondWord,0);
            distractor2 = changeLetter(firstWord,1) +"_"+ secondWord;
            distractor3 = firstWord+ "_" + changeLetter(secondWord.slice(0,secondWord.length-1), secondWord.slice(0,secondWord.length-1).length-2);
            //changeLetter(secondWord.slice(1, secondWord.length-1), secondWord.length-3);
        }
        else{
            distractor1 = firstWord +"_"+ secondWord.replace(secondWord.charAt(0), firstWord.charAt(1)) +"_" + thirdWord;
            distractor2 = changeLetter(firstWord,1) +"_"+ secondWord + "_" + thirdWord;
            distractor3 = firstWord + "_" +secondWord + "_" +changeLetter(thirdWord.slice(0,thirdWord.length-1),(thirdWord.slice(0,thirdWord.length-1).length-1)) ;
        }
    }
    console.log("distractor1 = "+distractor1);
    console.log("distractor2 = "+distractor2);
    console.log("distractor3 = "+distractor3);
    identifierAndDistractors.push(distractor1);
    identifierAndDistractors.push(distractor2);
    identifierAndDistractors.push(distractor3);
}
function shuffleArr (array){
    for (let i = array.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
    return array;
}

function changeLetter(word, position){
    for (let i = 0; i <alphabet.length ; i++) {
        let rand = rng.int32()%alphabet.length
        if(rand<0){rand = -1 * rand;}
        console.log("rand = " + rand);
        if(word.charAt(position) !== alphabet[rand] && word.charAt(position+1) !== alphabet[rand] && word.charAt(position-1) !== alphabet[rand]){
            console.log("letter = " + alphabet[rand]);
           word = word.replace(word.charAt(position), alphabet[rand]);
            console.log("word =" + word);
            return word;
        }
    }
}
