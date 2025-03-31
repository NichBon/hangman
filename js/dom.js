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
            letterButton.classList.add('guessed__wrong');
        } else {
            letterButton.classList.add('guessed__right');
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

export const addCompletedWord = (word, failCount) => {
    if (document.querySelector('#completedWords-heading').classList = 'hidden') {
        document.querySelector('#completedWords-heading').classList.remove('hidden')
    }
    const winLoss = failCount === 10 ? 'win' : 'loss';
    const completedWords = document.querySelector('#completedWords-inner')
    let div = document.createElement('div');
    div.classList = (`word-Complete`, `word-${winLoss}`);
    div.innerHTML = word;
    completedWords.appendChild(div);
}

export const toggleKeyboard = () => {
    const keyBoard = document.querySelector('#keyboard');
    const gameOptions = document.querySelector('#gameOptions');
    if (gameOptions.classList.contains('hidden')) {
        keyBoard.classList.add('hidden')
        gameOptions.classList.remove('hidden')
    } else {
        keyBoard.classList.add('hidden')
        gameOptions.classList.remove('hidden')
    }
}

export const buttonReset = () => {
    document.querySelectorAll('.guessed').forEach((letterButton, key) => {
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
                    addCompletedWord(word, 'loss')
                }
            } else {
                correctLetters += guessIndexList.length;

                if (correctLetters === word.length) {
                    gameEnd = true;
                    failcount = 11;
                    addCompletedWord(word, 'win')
                }
            }
            message(failcount);
            cleanup(gameEnd)
        }, { once: true })

        letterButton.classList = 'letter';
    })
}
