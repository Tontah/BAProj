words = [
        "account",              "achiever",             "acoustics",            "act",                  "action",
        "activity",             "actor",                "addition",             "adjustment",           "advertisement",
        "advice",               "aftermath",            "afternoon",            "afterthought",         "agreement",
        "air",                  "airplane",             "airport",              "alarm",                "amount",
        "amusement",            "anger",                "angle",                "animal",               "ants",
        "apparatus",            "apparel",              "appliance",            "approval",             "arch",
        "argument",             "arithmetic",           "arm",                  "army",                 "art",
        "attack",               "attraction",           "aunt",                 "authority",            "back",
        "badge",                "bag",                  "bait",                 "balance",              "ball",
        "base",                 "baseball",             "basin",                "basket",               "basketball",
        "bat",                  "bath",                 "battle",               "bead",                 "bear",
        "bed",                  "bedroom",              "beds",                 "bee",                  "beef",
        "beginner",             "behavior",             "belief",               "believe",              "bell",
        "bells",                "berry",                "bike",                 "bikes",                "bird",
        "birds",                "birth",                "birthday",             "bit",                  "bite",
        "blade",                "blood",                "blow",                 "board",                "boat",
        "bomb",                 "bone",                 "book",                 "books",                "boot",
        "border",               "bottle",               "boundary",             "box",                  "brake",
        "branch",               "brass",                "breath",               "brick",                "bridge",
        "brother",              "bubble",               "bucket",               "building",             "bulb",
        "burst",                "bushes",               "business",             "butter",               "button",
        "branch",               "brass",                "breath",               "brick",                "bridge",
        "brother",              "bubble",               "bucket",               "building",             "bulb",
        "burst",                "bushes",               "business",             "butter",               "button",
        "cabbage",              "cable",                "cactus",               "cake",                 "cakes",
        "calculator",           "calendar",             "camera",               "camp",                 "can",
        "cannon",               "canvas",               "cap",                  "caption",              "car",
        "card",                 "care",                 "carpenter",            "carriage",             "cars",
        "cart",                 "cast",                 "cat",                  "cats",                 "cattle",
        "cause",                "cave",                 "celery",               "cellar",               "cemetery",
        "cent",                 "chalk",                "chance",               "change",               "channel",
        "cheese",               "cherries",             "cherry",               "chess",                "chicken",
        "chickens",             "chin",                 "church",               "circle",               "clam",
        "cloth",                "clover",               "club",                 "coach",                "coal",
        "coast",                "coat",                 "cobweb",               "coil",                 "collar",
        "color",                "committee",            "company",              "comparison",           "competition",
        "condition",            "connection",           "control",              "cook",                 "copper",
        "corn",                 "cough",                "country",              "cover",                "cow",
        "cows",                 "crack",                "cracker",              "crate",                "crayon",
        "cream",                "creator",              "creature",             "credit",               "crib",
        "crime",                "crook",                "crow",                 "crowd",                "crown",
        "cub",                  "cup",                  "current",              "curtain",              "curve",
        "cushion",              "dad",                  "daughter",             "day",                  "death",
        "debt",                 "decision",             "deer",                 "degree",               "design",
        "desire",               "desk",                 "destruction",          "detail",               "development",
        "digestion",            "dime",                 "dinner",               "dinosaurs",            "direction",
        "dirt",                 "discovery",            "discussion",           "distance",             "distribution",
        "division",             "dock",                 "doctor",               "dog",                  "dogs",
        "doll",                 "dolls",                "donkey",               "door",                 "downtown",
        "drain",                "drawer",               "dress",                "drink",                "driving",
        "drop",                 "duck",                 "ducks",                "dust",                 "ear",
        "earth",                "earthquake",           "edge",                 "education",            "effect",
        "egg",                  "eggnog",               "eggs",                 "elbow",                "end",
        "engine",               "error",                "event",                "example",              "exchange",
        "existence",            "expansion",            "experience",           "expert",               "eye",
        "eyes",                 "face",                 "fact",                 "fairies",              "fall",
        "fang",                 "farm",                 "fear",                 "feeling",              "field",
        "finger",               "fire",                 "fireman",              "fish",                 "flag",
        "flame",                "flavor",               "flesh",                "flight",               "flock",
        "floor",                "flower",               "flowers",              "fly",                  "fog",
        "fold",                 "food",                 "foot",                 "force",                "fork",
        "form",                 "fowl",                 "frame",                "friction",             "friend",
        "friends",              "frog",                 "frogs",                "front",                "fruit",
        "fuel",                 "furniture",            "gate",                 "geese",                "ghost",
        "giants",               "giraffe",              "glass",                "glove",                "gold",
        "government",           "governor",             "grade",                "grain",                "grandfather",
        "grandmother",          "grape",                "grass",                "grip",                 "ground",
        "group",                "growth",               "guide",                "guitar",               "gun",
        "hair",                 "haircut",              "hall",                 "hammer",               "hand",
        "hands",                "harbor",               "harmony",              "hat",                  "head",
        "health",               "heat",                 "hill",                 "history",              "hobbies",
        "hole",                 "holiday",              "home",                 "honey",                "hook",
        "hope",                 "horn",                 "horse",                "horses",               "hose",
        "hospital",             "hot",                  "hour",                 "house",                "houses",
        "humor",                "hydrant",              "ice",                  "icicle",               "idea",
        "impulse",              "income",               "increase",             "industry",             "ink",
        "insect",               "instrument",           "insurance",            "interest",             "invention",
        "iron",                 "island",               "jail",                 "jam",                  "jar",
        "jeans",                "jelly",                "jellyfish",            "jewel",                "join",
        "judge",                "juice",                "jump",                 "kettle",               "key",
        "kick",                 "kiss",                 "kittens",              "kitty",                "knee",
        "knife",                "knot",                 "knowledge",            "laborer",              "lace",
        "ladybug",              "lake",                 "lamp",                 "land",                 "language",
        "laugh",                "leather",              "leg",                  "legs",                 "letter",
        "letters",              "lettuce",              "level",                "library",              "limit",
        "line",                 "linen",                "lip",                  "liquid",               "loaf",
        "lock",                 "locket",               "look",                 "loss",                 "love",
        "low",                  "lumber",               "lunch",                "lunchroom",            "machine",
        "magic",                "maid",                 "mailbox",              "man",                  "marble",
        "mark",                 "market",               "mask",                 "mass",                 "match",
        "meal",                 "measure",              "meat",                 "meeting",              "memory",
        "men",                  "metal",                "mice",                 "middle",               "milk",
        "mind",                 "mine",                 "minister",             "mint",                 "minute",
        "mist",                 "mitten",               "mom",                  "money",                "month",
        "moon",                 "morning",              "mother",               "motion",               "mountain",
        "mouth",                "move",                 "muscle",               "name",                 "nation",
        "neck",                 "need",                 "needle",               "nerve",                "nest",
        "night",                "noise",                "north",                "nose",                 "note",
        "notebook",             "number",               "nut",                  "oatmeal",              "observation",
        "ocean",                "offer",                "office",               "oil",                  "orange",
        "oranges",              "order",                "oven",                 "page",                 "pail",
        "pan",                  "pancake",              "paper",                "parcel",               "part",
        "partner",              "party",                "passenger",            "payment",              "peace",
        "pear",                 "pen",                  "pencil",               "person",               "pest",
        "pet",                  "pets",                 "pickle",               "picture",              "pie",
        "pies",                 "pig",                  "pigs",                 "pin",                  "pipe",
        "pizzas",               "place",                "plane",                "planes",               "plant",
        "plantation",           "plants",               "plastic",              "plate",                "play",
        "playground",           "pleasure",             "plot",                 "plough",               "pocket",
        "point",                "poison",               "pollution",            "popcorn",              "porter",
        "position",             "pot",                  "potato",               "powder",               "power",
        "price",                "produce",              "profit",               "property",             "prose",
        "protest",              "pull",                 "pump",                 "punishment",           "purpose",
        "push",                 "quarter",              "quartz",               "queen",                "question",
        "quicksand",            "quiet",                "quill",                "quilt",                "quince",
        "quiver",               "rabbit",               "rabbits",              "rail",                 "railway",
        "rain",                 "rainstorm",            "rake",                 "range",                "rat",
        "rate",                 "ray",                  "reaction",             "reading",              "reason",
        "receipt",              "recess",               "record",               "regret",               "relation",
        "religion",             "representative",       "request",              "respect",              "rest",
        "reward",               "rhythm",               "rice",                 "riddle",               "rifle",
        "ring",                 "rings",                "river",                "road",                 "robin",
        "rock",                 "rod",                  "roll",                 "roof",                 "room",
        "root",                 "rose",                 "route",                "rub",                  "rule",
        "run",                  "sack",                 "sail",                 "salt",                 "sand",
        "scale",                "scarecrow",            "scarf",                "scene",                "scent",
        "school",               "science",              "scissors",             "screw",                "sea",
        "seashore",             "seat",                 "secretary",            "seed",                 "selection",
        "self",                 "sense",                "servant",              "shade",                "shake",
        "shame",                "shape",                "sheep",                "sheet",                "shelf",
        "ship",                 "shirt",                "shock",                "shoe",                 "shoes",
        "shop",                 "show",                 "side",                 "sidewalk",             "sign",
        "silk",                 "silver",               "sink",                 "sister",               "sisters",
        "size",                 "skate",                "skin",                 "skirt",                "sky",
        "slave",                "sleep",                "sleet",                "slip",                 "slope",
        "smash",                "smell",                "smile",                "smoke",                "snail",
        "snails",               "snake",                "snakes",               "sneeze",               "snow",
        "soap",                 "society",              "sock",                 "soda",                 "sofa",
        "son",                  "song",                 "songs",                "sort",                 "sound",
        "soup",                 "space",                "spade",                "spark",                "spiders",
        "sponge",               "spoon",                "spot",                 "spring",               "spy",
        "square",               "squirrel",             "stage",                "stamp",                "star",
        "start",                "statement",            "station",              "steam",                "steel",
        "stem",                 "step",                 "stew",                 "stick",                "sticks",
        "stitch",               "stocking",             "stomach",              "stone",                "stop",
        "store",                "story",                "stove",                "stranger",             "straw",
        "stream",               "street",               "stretch",              "string",               "structure",
        "substance",            "sugar",                "suggestion",           "suit",                 "summer",
        "sun",                  "support",              "surprise",             "sweater",              "swim",
        "swing",                "system",               "table",                "tail",                 "talk",
        "tank",                 "taste",                "tax",                  "teaching",             "team",
        "teeth",                "temper",               "tendency",             "tent",                 "territory",
        "test",                 "texture",              "theory",               "thing",                "things",
        "thought",              "thread",               "thrill",               "throat",               "throne",
        "thumb",                "thunder",              "ticket",               "tiger",                "time",
        "tin",                  "title",                "toad",                 "toe",                  "toes",
        "tomatoes",             "tongue",               "tooth",                "toothbrush",           "toothpaste",
        "top",                  "touch",                "town",                 "toy",                  "toys",
        "trade",                "trail",                "train",                "trains",               "tramp",
        "transport",            "tray",                 "treatment",            "tree",                 "trees",
        "trick",                "trip",                 "trouble",              "trousers",             "truck",
        "trucks",               "tub",                  "turkey",               "turn",                 "twig",
        "twist",                "umbrella",             "uncle",                "underwear",            "unit",
        "use",                  "vacation",             "value",                "van",                  "vase",
        "vegetable",            "veil",                 "vein",                 "verse",                "vessel",
        "vest",                 "view",                 "visitor",              "voice",                "volcano",
        "volleyball",           "voyage",               "walk",                 "wall",                 "war",
        "wash",                 "waste",                "watch",                "water",                "wave",
        "waves",                "wax",                  "way",                  "wealth",               "weather",
        "week",                 "weight",               "wheel",                "whip",                 "whistle",
        "wilderness",           "wind",                 "window",               "wine",                 "wing",
        "winter",               "wire",                 "wish",                 "wood",                 "wool",
        "word",                 "work",                 "worm",                 "wound",                "wren",
        "wrench",               "wrist",                "writer",               "writing",              "yak",
        "yam",                  "yard",                 "yarn",                 "year",                 "yoke",
        "zebra",                "zephyr",               "zinc",                 "zipper",               "zoo"
    ];


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