function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    console.log("You choose: " + playerSelection);
    console.log("Computer chooses: " + 
    computerSelection);

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        setWinner("Tie");
        return "tie";
    }


    switch (playerSelection.toLowerCase())
    {
        case "rock":
            if (computerSelection.toLowerCase() == "scissors") {
                playerWin();
                return "player";
            }
            else {
                computerWin();
                return "computer";
            }
        case "scissors":
            if (computerSelection.toLowerCase() == "paper") {
                playerWin()
                return "player";
            }
            else {
                computerWin();
                return "computer";
            }
        case "paper":
            if (computerSelection.toLowerCase() == "rock") {
                playerWin();
                return "player";
            }
            else {
                computerWin();
                return "computer";
            }
    }
}

function setWinner(winner) {
    const winnerDOM = document.getElementById("winner");
    winnerDOM.innerText = winner;
}

function playerWin() {
    const playerScoreDOM = document.getElementById("player-score");
    let playerScore = parseInt(playerScoreDOM.innerText);
    playerScoreDOM.innerText = playerScore + 1;
    setWinner("Player");    
}

function computerWin() {
    const computerScoreDOM = document.getElementById("computer-score");
    let computerScore = parseInt(computerScoreDOM.innerText);
    computerScoreDOM.innerText = computerScore + 1;
    setWinner("Computer");    
}

function computerSelect() {
    let compChoice = getComputerChoice();
    const choice = document.getElementById("computer-choice");
    choice.innerText = compChoice;
    return compChoice;
}

function chooseRock() {
    console.log("Rock!");
    const choice = document.getElementById("player-choice");
    choice.innerText = "Rock";

    playRound("rock", computerSelect());
}
function choosePaper() {
    console.log("Paper!");
    const choice = document.getElementById("player-choice");
    choice.innerText = "Paper";

    playRound("paper", computerSelect());
}
function chooseScissors() {
    console.log("Scissors!");
    const choice = document.getElementById("player-choice");
    choice.innerText = "Scissors";

    playRound("scissors", computerSelect());
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", chooseRock);

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", choosePaper);

const scissorButton = document.getElementById("scissors");
scissorButton.addEventListener("click", chooseScissors);

//game();