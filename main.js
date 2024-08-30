const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const showResult = document.getElementById('result');

let userPoints = 0;
let computerPoints = 0;

function computerOption() {
    const options = ['rock', 'paper', 'scissors'];
    const computerSelected = Math.floor(Math.random() * options.length);
    return options[computerSelected];
}

rock.addEventListener('click', () => {
    if (computerOption() == 'rock') {
        showResult.textContent = "It's a tie!";
    }
    else if (computerOption() == 'paper') {
        showResult.textContent = "Paper beats rock! You lose.";
        computerPoints++;
        computerScore.textContent = computerPoints;
    }
    else {
        showResult.textContent = "Rock beats scissors! You win.";
        userPoints++;
        userScore.textContent = userPoints;
    }
})

paper.addEventListener('click', () => {
    if (computerOption() == 'paper') {
        showResult.textContent = "It's a tie!";
    }
    else if (computerOption() == 'rock') {
        showResult.textContent = "Paper beats rock! You win.";
        userPoints++;
        userScore.textContent = userPoints;
    }
    else {
        showResult.textContent = "Scissors beat paper! You lose.";
        computerPoints++;
        computerScore.textContent = computerPoints;
    }
})

scissors.addEventListener('click', () => {
    if (computerOption() == 'scissors') {
        showResult.textContent = "It's a tie!";
    }
    else if (computerOption() == 'rock') {
        showResult.textContent = "Rock beats scissors! You lose.";
        computerPoints++;
        computerScore.textContent = computerPoints;
    }
    else {
        showResult.textContent = "Scissors beat paper! You win.";
        userPoints++;
        userScore.textContent = userPoints;
    }
})