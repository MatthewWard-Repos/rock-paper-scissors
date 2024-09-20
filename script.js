const getComputerChoice = function () {
  const rock = 1;
  const paper = 2;
  const choiceC = Math.floor(Math.random() * 3) + 1;
  return choiceC === rock ? "rock" : choiceC === paper ? "paper" : "scissors";
};
const getHumanChoice = function () {
  const choiceH = prompt("Choose rock, paper, or scissors!", "").toLowerCase();
  return ["rock", "paper", "scissors"].includes(choiceH)
    ? choiceH
    : (alert("Not a valid choice!"), getHumanChoice());
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = function () {
    const computer = getComputerChoice();
    const human = getHumanChoice();
    let winner = human;
    let result;
    endRound = function (winner, result) {
      if (human === computer) {
        null;
      } else {
        winner === human ? humanScore++ : computerScore++;
      }

      console.log(
        `You ${result} this round! ${human} ${
          human === computer ? "vs" : winner === human ? "beats" : "beaten by"
        } ${computer},${
          human === computer ? " No winner" : ""
        } ${humanScore}/${computerScore}`
      );
    };

    if (human === computer) {
      result = "drew";
    } else {
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
        ? ((winner = human), (result = "won"))
        : ((winner = computer), (result = "lost"));
    }
    endRound(winner, result);
  };

  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  if (humanScore === computerScore) {
    result = "drew";
  } else {
    humanScore > computerScore ? (result = "won") : (result = "lost");
  }
  gameOver = function () {
    console.log(
      `You ${result} the game! Final Score ${humanScore}/${computerScore}`
    );
  };
  gameOver();
};
playGame();
