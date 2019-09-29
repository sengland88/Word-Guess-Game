var tvShows = ["Charmed" , "Heroes" , "Pokemon" , "Roseanne"]

// const maxTries = 10

var guessedLetters = [];
var letterCount = theWord
var guessingWord = [];
var remainingGuesses = 0;
var gameStart = false;
var gameFinished = false;
var wins = 0;

var theWord = tvShows[Math.floor(Math.random() * tvShows.length)].toLowerCase()

var wordLength = theWord.length

var dashes = theDashes(theWord)

console.log(`there should be ${dashes.join(" ")} displayed`)
document.getElementById("display_area").innerHTML = dashes.join(" ")

function theDashes(word) {
    console.log(`${word} is the word`)
    // create dashes for each letter in the word
    var theGuesses = [];

    for (let i = 0; i < word.length; i++) {
        // add a dash into the guesses array
        theGuesses.push("_")
    }

    //return an array with those dash in each element
    return theGuesses

};


document.onkeypress = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase()
        if (theWord.includes(userGuess)) {
            console.log("right letter")
            var guessedLetter = theWord.indexOf(userGuess)
            console.log(guessedLetter)
            console.log(dashes)




            
            
            
            
        } else {
            console.log("wrong letter")
            
        }

    
    
        

    // when a key is pressed, it will take that key and look into dashes.

    // if the value is true, replace the dash

    // if the value is false, add it to letters guessed
}