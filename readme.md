# Hangman

## Outline
Hangman game built for Nology project. 
- Made 1-2 weeks into learning JS, with no knowledge of error handling, back end integration. 
- Objects taught partway through development.

## MVP with sub sections for improvements made:
- A game should start with a word being randomly selected.
    - Added category selection
    - **PLANNED** word removal upon completion for no repeat on subsequent games (needs to deal with edge case for empty dictionary)
- A representation of the word made up of underscore (\_) characters should display on the screen.
    - Includes box styling to show letters
- Create a user interface made up of buttons representing all 26 letters of the alphabet.
    - QWERTY style
- Clicking a button should register its letter as a 'guess'
    - Also records success/failure by changing button color
- If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
- If the letter is not in the word, an additional element to the hangman diagram should be added.
    - Also gives user message feedback with remaining number of guesses
- The game should keep track of which letters have been 'guessed' already.
    - tracked through colours on buttons and skipping input events
- The game should provide a win or loss message depending on the outcome
- There should be some functionality to play again.
    - word selection and keyboard swap with each other depending on whether a game is in progress
- This should be styled to support mobile, tablet, and desktop views

## Bonus
- Allow keyboard input
    - not currently implemented
- Keep track of words that have been used already and display them on the screen
    - tracks along with success/failure through color

## Additional
- Dark/Light mode toggle

## Future possible features as I learn more:
- backend integration for dictionary retrieval/usage
- safer design/error handling
- more robust event listening behaviour (What is good practice? What is efficient? What is trivial in either case?)
- use BEM properly