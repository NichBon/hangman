import {
    baldurs,
    fabrics,
} from './js/wordlists.js';

import {
    wordSelection,
    checkLetter,
    letterKeys,
} from './js/game.js'

import {
    wordSpaceCreate,
    letterFeedback,
    renderMan,
    message,
    addCompletedWord,
    toggleKeyboard,
    buttonReset,
} from './js/dom.js'



//GAME INITIATION
let failcount = 0;
let correctLetters = 0;
let gameEnd = false;
renderMan(failcount);
const word = wordSelection(baldurs);
wordSpaceCreate(word);
message(failcount)
console.log(word)


// event for clicking letters
// run on game start

document.querySelectorAll('.letter').forEach((letterButton, key) => {
    letterButton.addEventListener("click", (e) => {
        let letterGuessed = letterKeys[key];
        console.log(letterGuessed);

        // success or fail dom
        let guessIndexList = checkLetter(letterGuessed, word)
        letterFeedback(letterButton, guessIndexList, letterGuessed)

        // success or fail game
        if (guessIndexList.length === 0) {
            failcount += 1;
            renderMan(failcount)
            if (failcount === 10) {
                gameEnd = true;
            }
        } else {
            correctLetters += guessIndexList.length;

            if (correctLetters === word.length) {
                gameEnd = true;
                failcount = 11;
                
            }
        }
        message(failcount);
        if (gameEnd === true) {
            toggleKeyboard()
            buttonReset()
            addCompletedWord(word, failcount)
        }
    }, {once: true})
})


// change picture if guess is wrong (or other behaviour)

// button press || key press behaviour
    // if button or key is pressed
    // guess letter  
        // if letter is in a guess
            // show letter in word
            // turn letter background positive colour
        //if letter is not in a guess
            // change wrong guess counter (and change picture)
            // turn letter background negative colour
    // deactivate button for that letter
        
// success/loss script
    // return meaning and/or syntax of the word?


// reset state
// record previous word or remove previous word from pool