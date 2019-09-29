var tvShows = ["Charmed" , "Heroes" , "Pokemon" , "Roseanne"]

const maxTries = 10

var guessedLetters = [];
var letterCount; 
var guessingWord = [];
var remainingGuesses = 0;
var gameStart = false;
var gameFinished = false;
var wins = 0;


// document.onkeypress = function();

var theWord = tvShows[Math.floor(Math.random() * tvShows.length)]

var wordLength = theWord.length

var dashes = theDashes(theWord)
document.getElementById("display_area").innerHTML = dashes.join(" ")

function theDashes(word) {
    // create dashes for each letter in the word
    var theGuesses = [];

    for (let i = 0; i < word.length; i++) {
        // add an dash into the guesses array
        theGuesses.push("_")
    }

    //return an array with those dash in each element
    return theGuesses

}

