const getComputerChoice = function () {
  const rock = 1;
  const paper = 2;
  const choiceC = Math.floor(Math.random() * 3) + 1;
  return choiceC === rock ? "rock" : choiceC === paper ? "paper" : "scissors";
};
const getHumanChoice = function () {
  const choiceH = prompt("Choose rock, paper, or scissors!");
  return ["rock", "paper", "scissors"].includes(choiceH.toLowerCase())
    ? choiceH
    : (alert("Not a valid choice!"), getHumanChoice());
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;
  let winner;
  let loser;
  let result;

  const playRound = function () {
    const computer = getComputerChoice();
    const human = getHumanChoice();

    draw = function () {
      console.log(
        `Draw! ${human} vs ${computer}, No winner, ${humanScore}/${computerScore}`
      );
    };

    endRound = function (winner, loser, result) {
      winner === human ? humanScore++ : computerScore++;
      console.log(
        `You ${result}! ${winner} beats ${loser}, ${humanScore}/${computerScore}`
      );
    };

    if (human === computer) {
      draw();
    } else {
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
        ? ((winner = human),
          (loser = computer),
          (result = "win"),
          endRound(winner, loser, result))
        : ((winner = computer),
          (loser = human),
          (result = "lose"),
          endRound(winner, loser, result));
    }
  };

  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  if (humanScore === computerScore) {
    console.log(`You drew! ${humanScore} to ${computerScore}`);
  } else {
    console.log(
      `You ${
        humanScore > computerScore ? "won" : "lost"
      }! ${humanScore} to ${computerScore}`
    );
  }
};
playGame();
