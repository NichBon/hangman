// create flip card for letters

export const wordSpaceCreate = (word) => {
    try {
        const wordSpace = document.querySelector('#word')
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

export const letterFeedback = (letterButton, guessIndexList, letterGuessed) => {
    try {
        if (guessIndexList.length === 0) {
            letterButton.classList.add('guessed-wrong');
        } else {
            letterButton.classList.add('guessed-right');
            for (const index of guessIndexList) {
                document.querySelector(`#wordLetter${index}`).innerHTML = letterGuessed;
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
    "Success!"
]

export const message = (failcount, gameWin) => {
    if (gameWin === true) {
        document.querySelector('#message-text').innerHTML = gameStatusArr[11]
    } else {
        document.querySelector('#message-text').innerHTML = gameStatusArr[failcount];
    }
}

export const addCompletedWord = (word, winLoss) => {
    const completedWords = document.querySelector('#completedWords-inner')
    let div = document.createElement('div');
    div.classList = (`word-Complete`, `word-${winLoss}`);
    div.innerHTML = word;
    completedWords.appendChild(div);
}