function computerPlay() {
  // Generate random number
  let choiceNumber = Math.random();

  // Use number to assign a computer choice
  if (choiceNumber < 0.33) {
    return "rock";
  } else if (choiceNumber < 0.66) {
    return "paper";
  } else {
    return "scissors"
  }
}

function playerPlay() {
  // Prompt user to select a choice
  return prompt("Choose rock, paper or scissors: ")
}

function playRound(playerSelection, computerSelection) {
  // Convert user input to lower case 
  playerSelection = playerSelection.toLowerCase();

  // Compare user and computer choices to determine the winner. 
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

function game() {
  // Intialise the scores
  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;

  // Loop through five rounds, counting the winner of each
  for (i = 0; i < 5; i++) {
    result = playRound(playerPlay(), computerPlay());
    console.log(result);
    if (result == "You win!") {
      playerScore += 1;
    } else if (result == "You lose!") {
      computerScore += 1;
    } else if (result == "It's a draw") {
      drawScore += 1;
    }
  }

  // Log the scores 
  console.log(`Player wins: ${playerScore}`);
  console.log(`Computer wins: ${computerScore}`);
  console.log(`Draws: ${drawScore}`);

  // Declare the overall winner 
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else {
    console.log("Computer wins the game!");
  }
}

game();