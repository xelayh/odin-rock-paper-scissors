
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const computerChoice = getComputerChoice();

