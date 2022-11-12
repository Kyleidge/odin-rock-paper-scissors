function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "tie";
    }

    switch (playerSelection.toLowerCase())
    {
        case "rock":
            if (computerSelection.toLowerCase() == "scissors") {
                return "player";
            }
            else {
                return "computer";
            }
        case "scissors":
            if (computerSelection.toLowerCase() == "paper") {
                return "player";
            }
            else {
                return "computer";
            }
        case "paper":
            if (computerSelection.toLowerCase() == "rock") {
                return "player";
            }
            else {
                return "computer";
            }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What u want?");

        switch (playRound(playerSelection, getComputerChoice()))
        {
            case "tie":
                break;
            case "player":
                playerWins++;
                break;
            case "computer":
                computerWins++;
        }

        console.log("Score ---- Player: " + playerWins + " --- Computer: " + computerWins);
    }
    if (playerWins == computerWins) {
        console.log("Tie!");
    }
    else if (playerWins > computerWins) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
    }
}

game();