// Assign variables
var computerScore = 0;
var userScore = 0;
var draws = 0;
var gameresult = '';
var totalscores = '';
var totalUserScore = 0;
var totalComputerScore = 0;

// Place event listeners on User's selection buttons
document.getElementById('rock').addEventListener('click', function() { playRound('rock');});
document.getElementById('paper').addEventListener('click', function() { playRound('paper');});
document.getElementById('scissors').addEventListener('click', function() { playRound('scissors');});

// Generate computer's choice
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

// Play a round and decide the outcome
function playRound(weapon) {
  var result = '';
  var computerChoice = computerPlay()
  
  if (computerChoice === "rock") {
    if (weapon === "paper") {
      result = "Paper beats rock. You win!";
      userScore += 1;
    } else if (weapon === "rock") {
      result = "You draw!";
      draws += 1;
    } else if (weapon === "scissors") {
      result = "Rock beats scissors. You lose!";
      computerScore += 1;
    }
  } else if (computerChoice === "paper") {
    if (weapon === "scissors") {
      result = "Sissors beats paper. You win!";
      userScore += 1;
    } else if (weapon === "paper") {
      result = "You draw!"
      draws += 1;
    } else if (weapon === "rock") {
      result = "Paper beats rock. You lose!"
      computerScore += 1;
    }
  } else if (computerChoice === "scissors") {
    if (weapon === "rock") {
      result = "Rock beats scissors. You win!";
      userScore += 1;
    } else if (weapon === "scissors") {
      result = "You draw!"
      draws += 1;
    } else if (weapon === "paper") {
      result = "Scissors beats paper. You lose!"
      computerScore += 1;
    }
  }

  // Show computer's choice image
  if (computerChoice === "rock") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/rock.png\" alt=\"rock\" width=\"100px\" height=\"100px\">"
  } else if (computerChoice === "paper") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/paper.png\" alt=\"paper\" width=\"100px\" height=\"100px\">"
  } else if (computerChoice === "scissors") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/scissors.png\" alt=\"scissors\" width=\"100px\" height=\"100px\">"
  }

  // Set round to declare first to five
  if (userScore >= 5) {
    gameresult = 'User wins!'
    computerScore = 0;
    userScore = 0;
    draws = 0;
    totalUserScore += 1;
  } else if (computerScore >=5) {
    gameresult = "Computer wins!"
    enemyScore = 0;
    userScore = 0;
    draws = 0;
    totalComputerScore += 1;
  }

  // Display outcome and update scoreboard
  document.getElementById('playOutcome').innerText = result;
  document.getElementById('rWins').innerText = userScore;
  document.getElementById('rLost').innerText = computerScore;
  document.getElementById('rDrawn').innerText = draws;
  document.getElementById('gWins').innerText = totalUserScore;
  document.getElementById('gLost').innerText = totalComputerScore;
<<<<<<< HEAD

  if (computerChoice === "rock") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/rock.png\" alt=\"rock\" width=\"100px\" height=\"100px\">"
  } else if (computerChoice === "paper") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/paper.png\" alt=\"paper\" width=\"100px\" height=\"100px\">"
  } else if (computerChoice === "scissors") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/scissors.png\" alt=\"scissors\" width=\"100px\" height=\"100px\">"

  }

=======
>>>>>>> rps-ui
}

// Reset scores by refreshing the page
function reset () {
  window.location.reload();
}
