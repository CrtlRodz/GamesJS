let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//This function return a random number between 0 and 9.
const generateTarget = (num) => {
    return Math.floor((Math.random() * 9) + 1);
}

console.log(generateTarget());
//This function compares the user & computers guess to the secretNumber
const compareGuesses = (userGuess, computerGuess, generateTarget) => {
    if (Math.abs(userGuess - generateTarget) < Math.abs(computerGuess - generateTarget) || (Math.abs(userGuess - generateTarget) === Math.abs(computerGuess - generateTarget))) {
        return true;
    } else if (Math.abs(userGuess - generateTarget) > Math.abs(computerGuess - generateTarget)) {
        return false;
    }
};
//This function will update the winners score by 1  
const updateScore = (winner) => {
    if (winner === 'human') {
        return humanScore + 1;
    } else if (winnner === 'computer') {
        return computerScore++;
    } else {
        return 'Invalid';
    }
};
//This code will increase the currentround by 1.
// console.log(humanScore);
// console.log(computerScore);

const advanceRound = () => {
    if ((comapreGuesses === true) || (compareGuesses === false)) {
        let currentRoundNumber = currentRoundNumber + 1;
    }
};