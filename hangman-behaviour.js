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
console.log(baldurs.length)
console.log(Math.floor(Math.random()*(baldurs.length-1)))
const word = baldurs[Math.floor(Math.random()*(baldurs.length-1))]
console.log(word)

document.querySelectorAll('.letter').forEach((letter, key) => {
    letter.addEventListener("click", (e) => {
        console.log(key);


        letter.classList.add('guessed')
    })
})

console.log()

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