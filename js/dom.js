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
