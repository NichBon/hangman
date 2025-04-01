
import {
    wordLists
} from './js/wordlists.js';

import {
    wordSelection,
    checkLetter,
} from './js/game.js'

import {
    wordSpaceCreate,
    letterFeedback,
    renderMan,
    message,
    addCompletedWord,
    toggleKeyboard,
    toggleDarkMode,
} from './js/dom.js'


//GAME INITIATION + GLOBAL VARIABLES
let failcount = 10;
let correctLetters = 0;
let gameEnd = false;
let word = ''
renderMan(failcount);


//GAME INITIATION (NOT PURE)
const form = document.querySelector('#gameStart')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // retrieves word list and selects a word
    const formData = Object.fromEntries(new FormData(form));
    const wordCategory = formData.wordCategory;
    word = wordSelection(wordLists[wordCategory]);
    wordSpaceCreate(word);

    // set game states
    toggleKeyboard();
    correctLetters = 0;
    failcount = 0;
    gameEnd = false;
    renderMan(failcount)
    message(failcount);
});

// KEYBOARD ONSCREEN IN PROGRESS
addEventListener("keydown", (e) => {
    if (document.querySelector(`#${e.key}`).classList.contains('guessed') || gameEnd) {
        return;
    }
    letterPress(e.key);
})

document.querySelectorAll('.letter').forEach((letterButton, key) => {
    letterButton.addEventListener("click", (e) => {
        if (letterButton.classList.contains('guessed') || gameEnd) {
            return;
        }
        letterPress(letterButton.id);
    })
})

const letterPress = ((letterGuessed) => {
    // success or fail dom
    let guessIndexList = checkLetter(letterGuessed, word)
    letterFeedback(guessIndexList, letterGuessed)

    // success or fail game
    if (guessIndexList.length === 0) {
        failcount += 1;
        renderMan(failcount)
        if (failcount === 10) {
            gameEnd = 'loss';
        }
    } else {
        correctLetters += guessIndexList.length;
        if (correctLetters === word.length) {
            failcount = 11;
            gameEnd = 'win';
        }
    }
    message(failcount);
    if (gameEnd) {
        toggleKeyboard()
        addCompletedWord(word, gameEnd)
        //reset buttons if needed
        document.querySelectorAll('.guessed').forEach((letterButton, key) => {
            letterButton.classList = 'letter';
        })
    }
})

document.querySelector('#keyboard').classList.add('hidden');
document.querySelector('#darkMode').addEventListener('click', (e) => {
    toggleDarkMode();
})