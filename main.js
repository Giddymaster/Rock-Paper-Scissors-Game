let playerScore = 0;
let computerScore = 0;

function getRandomChoice() {
    const choices = ['✊', '✋', '✌️'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "DRAW";
    }
    if ((playerChoice === '✊' && computerChoice === '✌️') ||
        (playerChoice === '✋' && computerChoice === '✊') ||
        (playerChoice === '✌️' && computerChoice === '✋')) {
        playerScore++;
        return "PLAYER WINS";
    } else {
        computerScore++;
        return "COMPUTER WINS";
    }
}

function updateGameStatus(playerChoice) {
    let computerChoice = getRandomChoice();
    document.getElementById("computer-choice").textContent = computerChoice;
    document.getElementById("player-choice").textContent = playerChoice;
    
    let result = determineWinner(playerChoice, computerChoice);
    document.querySelector(".status").textContent = result;
    document.querySelector(".score").textContent = `computer ${computerScore} ${playerScore} player`;
}