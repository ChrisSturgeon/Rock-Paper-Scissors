

function computerPlay() {
  let choiceNumber = Math.random();

  
  if (choiceNumber < 0.33) {
    return "rock";
  } else if (choiceNumber < 0.66) {
    return "paper";
  } else {
    return "scissors"
  }
}

function playerPlay() {
  return prompt("Choose rock, paper or scissors: ")
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection == "rock") {
    if (playerSelection == "paper") {
      return "You win!";
    } else if (playerSelection == "scissors") {
      return "You lose!";
    } else if (playerSelection == "rock") {
      return "It's a draw";
    } else {
      return "You did not pick rock, paper or scissors.";
    }    
    } else if (computerSelection == "paper") {
      if (playerSelection == "scissors") {
        return "You win!";
      } else if (playerSelection == "rock") {
        return "You lose!";
      } else if (playerSelection == "paper") {
        return "It's a draw";
      } else {
        return "You did not pick rock, paper or scissors.";
      }
    } else if (computerSelection == "scissors") {
      if (playerSelection == "rock") {
        return "You win!";
      } else if (playerSelection == "paper") {
        return "You lose!";
      } else if (playerSelection == "scissors") {
        return "It's a draw";
      } else {
        return "You did not pick rock, paper or scissors.";
      }
    }
    }

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));  

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;


  for (i = 0; i < 5; i++) {
    result = playRound(playerPlay(), computerPlay());
    if (result == "You win!") {
      console.log("Hells, yes!")
      playerScore += 1;
      console.log(`Player Score: ${playerScore}`);
    } else if (result == "You lose!") {
      console.log("Oh, no!");
      computerScore += 1;
      console.log(`Computer Score: ${computerScore}`);
    } else if (result == "It's a draw") {
      drawScore += 1;
      console.log(`Draw Score: ${drawScore}`);
    }

  }
  console.log(playerScore);
  console.log(computerScore);
  console.log(drawScore);
  
}


game();