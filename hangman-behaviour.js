import {
    baldurs,
    fabrics,
} from './js/wordlists.js';

import {
    wordSelection,
    checkLetter,
    letterKeys,
    gameOver,
} from './js/game.js'

import {
    wordSpaceCreate,
    letterFeedback,
    renderMan,
    gameStatus,
} from './js/dom.js'

// event for clicking letters
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
        }

        gameStatus(failcount)

    })
})

//GAME INITIATION
let failcount = 0
renderMan(failcount)
const word = wordSelection(baldurs);
wordSpaceCreate(word);
gameStatus(failcount)
console.log(word)


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