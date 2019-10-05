var tvShows = ["Charmed" , "Heroes" , "Pokemon" , "Roseanne" ,]

var wins = 0;
var losses = 0;
var theAnswer = [];
var remainingGuess = 12;
var lettersGuessed = [];
var start = true;

var theWord 
console.log(theWord)

reStart()

document.onkeypress = function() {
    if (event.keyCode < 97 || event.keyCode > 122) {return false;}
    var userGuess = event.key
    console.log(userGuess)
    if (theWord.includes(userGuess)) {
        console.log("right")
        correctGuess()
        //trigger wordCheck - this needs to be run each time
        wordCheck()

        
    } else {
        console.log("wrong")
        incorrectGuess()
    }
}

function theDashes(word) {
    console.log(`${word} is the word`)
    var theGuesses = [];
    for (let i = 0; i < word.length; i++) {
        theGuesses.push("_")
    }
    return theGuesses
};

function correctGuess() {
    var youGo = event.key;
    console.log("You go girl!")
    //take the correct letter and display it in the dashes array
    // create a for loop and find the index of correct letter guessed
    
    for (let i = 0 ; i < theWord.length ; i++) {
        if (youGo === theWord[i]) {
            // replace the dash in the dashes array with the same index with the correct event.key
            theAnswer[i] = youGo
            document.querySelector("#display_area").innerHTML = theAnswer.join(" ")
        }
    }
}

function incorrectGuess() {
    var noGo = event.key;
    console.log("the incorrectGuess function works")
    remainingGuess--
    console.log(remainingGuess)
    document.querySelector("#remainingguess-text").innerHTML = remainingGuess
    document.querySelector("#lettersguessed-text").innerHTML = lettersGuessed
    lettersGuessed.push(noGo)
    console.log(lettersGuessed)

    if (remainingGuess === 0) {
        alert("you lost")
            youLost()
        }
    }


function wordCheck() {
// if the dashes array (as a string) matches the original word
console.log(theAnswer,theWord)
if (theAnswer.join("") === theWord) {
    alert("Go on with your bad self!")
    youWon()
}    
}

function reStart() {
    // theDashes()
    // theAnswer = theDashes(theWord)
    remainingGuess = 12;
    lettersGuessed = [];
    theGuesses = [];
    if (!start) alert("Go ahead and try to guess the new word")
    theWord = tvShows[Math.floor(Math.random() * tvShows.length)].toLowerCase()
    theAnswer = theDashes(theWord)
    document.querySelector("#display_area").innerHTML = theAnswer.join(" ")
    start = false;
}

function youWon() {
    wins++
    document.querySelector("#wins-text").innerHTML = wins
    reStart()
}

function youLost() {
    losses++
    document.querySelector("#losses-text").innerHTML = losses
    reStart()
}