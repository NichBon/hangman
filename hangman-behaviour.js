// generate a word to guess at
// make the words coding related?
const baldurs = [
    'shadowheart', 
    'minsc', 
    'laezel', 
    'karlach', 
    'astarion',
    'gale',
    'wyll',
    'halsin',
    'minthara',
    'alfira',
    'losiir'
]
// 'the dark urge',

const wordSelection = (wordList) => {
    return(wordList[Math.floor(Math.random()*(wordList.length-1))])
}



// create word space 
const wordSpaceCreate = (word) => {
    const wordSpace = document.querySelector('#word')
    for (i=0; i < word.length; i++) {
        let div = document.createElement('div');
        div.classList = (`wordLetter`);
        div.id = (`wordLetter${0}`);
        div.innerHTML = '__';
        wordSpace.appendChild(div);
    }
}


// event for letter clicking
const letterKeys = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
    'a','s', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z','x', 'c', 'v', 'b', 'n', 'm',
];

const checkLetter = (letter, word) => {
    return(word.indexOf(letter))
}

document.querySelectorAll('.letter').forEach((letter, key) => {
    letter.addEventListener("click", (e) => {
        console.log(letterKeys[key]);
        console.log(checkLetter(letterKeys[key], word))
        letter.classList.add('guessed')
    })
})

//GAME RUNNING
const word = wordSelection(baldurs);
wordSpaceCreate(word);

console.log(word)

// confirm if a letter is in a guess
    // check array of word
    // return indexes of matching letter in word
    // return some false or similar value if not present

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