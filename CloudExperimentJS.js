let identifiers = ["stillTrying", "computer_science", "trying_again", "dish_washer", "programmingSleep"]; // Array to hold identifiers
document.addEventListener("DOMContentLoaded", () => {
    let mainPage = document.querySelector("#mainPage");
    let identifierAndDistractors = [[]]; // Array to hold identifiers and their distractors
    let next = document.querySelector("#next");
    const div = document.getElementById("myDiv");
    next.onclick = goToIdentifierPage;
});

function goToIdentifierPage(Html) {
    document.location.href = "IdentifiersPage.html";
    document.addEventListener("DOMContentLoaded", () => {
        let identifierToStudy= document.getElementById("#mainPage h1")
        identifierToStudy.innerHTML = identifiers[(getRandomInt(1000) % identifiers.length)];
        document.addEventListener( "keypress" ,() => {
           //if(key = Enter)

        });
    });
}
 function onKeyPress(){

 }


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//To change the color of text randomly
const colors = ["#34A853", "#FBBC05", "#4285F4", "#7FBC00", "#FFBA01", "#01A6F0"];
const random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;