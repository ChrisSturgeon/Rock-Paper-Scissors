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


var enemyScore = 0;
var userScore = 0;
var draws = 0;
var gameresult = '';
var totalscores = '';
var totalUserScore = 0;
var totalComputerScore = 0;

document.getElementById('rock').addEventListener('click', function() { playRound('rock');});
document.getElementById('paper').addEventListener('click', function() { playRound('paper');});
document.getElementById('scissors').addEventListener('click', function() { playRound('scissors');});

function playRound(weapon) {


  
  var computerChoice = computerPlay()
  var result = '';

  if (computerChoice === "rock") {
    if (weapon === "paper") {
      result = "Paper beats rock. You win!";
      userScore += 1;
    } else if (weapon === "rock") {
      result = "You draw!";
      draws += 1;
    } else if (weapon === "scissors") {
      result = "Rock beats scissors. You lose!";
      enemyScore += 1;
    }
  } else if (computerChoice === "paper") {
    if (weapon === "scissors") {
      result = "Sissors beats paper. You win!";
      userScore += 1;
    } else if (weapon === "paper") {
      result = "You draw!"
      draws += 1;
    } else if (weapon === "rock") {
      result = "Rock beats scissors. You lose!"
      enemyScore += 1;
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
      enemyScore += 1;
    }
  }

  if (userScore >= 5) {
    gameresult = 'User wins!'
    enemyScore = 0;
    userScore = 0;
    draws = 0;
    totalUserScore += 1;
  } else if (enemyScore >=5) {
    gameresult = "Computer wins!"
    enemyScore = 0;
    userScore = 0;
    draws = 0;
    totalComputerScore += 1;
  }
  document.getElementById('playOutcome').innerText = result;
  document.getElementById('rWins').innerText = userScore;
  document.getElementById('rLost').innerText = enemyScore;
  document.getElementById('rDrawn').innerText = draws;
  document.getElementById('gWins').innerText = totalUserScore;
  document.getElementById('gLost').innerText = totalComputerScore;

  if (computerChoice === "rock") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/rock.png\" alt=\"rock\" width=\"100px\" height=\"100px\">"
  } else if (computerChoice === "paper") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/paper.png\" alt=\"paper\" width=\"100px\" height=\"100px\">"
  } else if (computerChoice === "scissors") {
    document.getElementById('computerIcon').innerHTML = "<img src=\"Images/scissors.png\" alt=\"scissors\" width=\"100px\" height=\"100px\">"

  }

}

function reset () {
  window.location.reload();
}
