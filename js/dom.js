// create flip card for letters

export const toggleDarkMode = () => {
    const body = document.querySelector('body');
    if (body.classList == 'dark') {
        body.classList.remove('dark')
        body.classList.add('light')
    } else {
        body.classList.remove('light')
        body.classList.add('dark')
    }
}

export const wordSpaceCreate = (word) => {
    try {
        const wordSpace = document.querySelector('#word')
        wordSpace.replaceChildren();
        for (let i = 0; i < word.length; i++) {
            let div = document.createElement('div');
            div.classList = (`wordLetter`);
            div.id = (`wordLetter${i}`);
            div.innerHTML = '__';
            wordSpace.appendChild(div);
        }
    } catch (error) {
        console.error('wordSpaceCreate' + error)
    }
}

export const letterFeedback = (guessIndexList, letterGuessed) => {
    try {
        const letterButton = document.querySelector(`#${letterGuessed}`)
        if (guessIndexList.length === 0) {
            letterButton.classList.add('guessed');
            letterButton.classList.add('wrong');
        } else {
            letterButton.classList.add('guessed');
            letterButton.classList.add('right');
            for (const index of guessIndexList) {
                document.querySelector(`#wordLetter${index}`).innerHTML = letterGuessed.toUpperCase();
            }
        }
    } catch (error) {
        console.error('letterFeedback' + error)
    }
}

export const renderMan = (failcount) => {
    try {
        console.log(document.querySelector('#gallows-img'))
        document.querySelector('#gallows-img').src = `./img/h-${failcount}.jpg`;
    } catch (error) {
        console.error('renderMan' + error)
    }
}

const gameStatusArr = [
    'Guess a letter',
    'Is that a line? (9 guesses left)',
    'Another line? (8 guesses left)',
    'Must be building a house. (7 guesses left)',
    'Is that for hanging clothes on? (6 guesses left)',
    'Might be getting aHEAD of myself. (5 guesses left)',
    "Where there's a head there's a body. (4 guesses left)",
    "Need a hand with that? (3 guesses left)",
    "No hARM could possibly come of this. (2 guesses left)",
    "Are you pulling my leg? (Last guess)",
    "Time to hang it up, that's a loss.",
    "Success! Click start game to play again."
]

export const message = (failcount, gameWin) => {
    if (gameWin === true) {
        document.querySelector('#message-text').innerHTML = gameStatusArr[11]
    } else {
        document.querySelector('#message-text').innerHTML = gameStatusArr[failcount];
    }
}

export const addCompletedWord = (word, gameEnd) => {
    if (document.querySelector('#completedWords-heading').classList = 'hidden') {
        document.querySelector('#completedWords-heading').classList.remove('hidden')
    }
    const completedWords = document.querySelector('#completedWords-inner')
    let div = document.createElement('div');
    div.classList = (`word-Complete`, `word-${gameEnd}`);
    div.innerHTML = word.toUpperCase();
    completedWords.appendChild(div);
}

export const toggleKeyboard = () => {
    const keyBoard = document.querySelector('#keyboard');
    const gameOptions = document.querySelector('#gameOptions');
    if (gameOptions.classList.contains('hidden')) {
        keyBoard.classList.add('hidden')
        gameOptions.classList.remove('hidden')
    } else {
        gameOptions.classList.add('hidden')
        keyBoard.classList.remove('hidden')
    }
}
