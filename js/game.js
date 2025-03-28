export const wordSelection = (wordList) => {
    return (wordList[Math.floor(Math.random() * (wordList.length - 1))])
}

export const letterKeys = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm',
];

export const checkLetter = (letterGuessed, word) => {
    // returns an array with a set of values
    // return (word.indexOf(letter))
    return (
        word.toLowerCase().split('').reduce(
            (indexList, letterAtIndex, indexOfLetter) => {
                if (letterAtIndex === letterGuessed) {
                    indexList.push(indexOfLetter)
                };
                return indexList;
            }, []
        )
    )
}

export const gameOver = (failCount) => {
    if (failCount >= 14) return true
}