const getComputerChoice = function () {
  const choiceC = Math.floor(Math.random() * 3);
  return choiceC === 1 ? "rock" : choiceC === 2 ? "paper" : "scissors";
};
const getHumanChoice = function (choice) {
  return choice;
};

let humanScore = 0;
let computerScore = 0;
let round = 1;

// const playGame = function () {
//   const playRound = function () {
//     const computer = getComputerChoice();
//     const human = getHumanChoice(target);
//     let winner = human;
//     let result;
//     endRound = function (winner, result) {
//       if (human === computer) {
//         null;
//       } else {
//         winner === human ? humanScore++ : computerScore++;
//       }

//       console.log(
//         `You ${result} round ${round} of 5! ${human} ${
//           human === computer ? "vs" : winner === human ? "beats" : "beaten by"
//         } ${computer},${
//           human === computer ? " No winner" : ""
//         } ${humanScore}/${computerScore}`
//       );
//       round++;
//     };

//     if (human === computer) {
//       result = "drew";
//     } else {
//       (human === "rock" && computer === "scissors") ||
//       (human === "paper" && computer === "rock") ||
//       (human === "scissors" && computer === "paper")
//         ? ((winner = human), (result = "won"))
//         : ((winner = computer), (result = "lost"));
//     }
//     endRound(winner, result);
//   };

//   // for (let i = 1; i <= 5; i++) {
//   //   playRound();
//   // }

//   if (humanScore === computerScore) {
//     result = "drew";
//   } else {
//     humanScore > computerScore ? (result = "won") : (result = "lost");
//   }
//   gameOver = function () {
//     console.log(
//       `You ${result} the game! Final Score ${humanScore}/${computerScore}`
//     );
//   };
//   gameOver();
// };

const playRound2 = function (choice) {
  const computer = getComputerChoice();
  const human = choice;
  let winner = human;

  endRound = function (winner, result) {
    gameOver = function () {
      console.log(
        `You ${result} the game! Final Score ${humanScore}/${computerScore}`
      );
      humanScore = 0;
      computerScore = 0;
      round = 1;
    };
    if (human === computer) {
      null;
    } else {
      winner === human ? humanScore++ : computerScore++;
      if (!(humanScore === 5 || computerScore === 5)) {
        console.log(
          `You ${result} round ${round}! ${human} ${
            human === computer ? "vs" : winner === human ? "beats" : "beaten by"
          } ${computer},${
            human === computer ? " No winner" : ""
          } ${humanScore}/${computerScore}`
        );
        round++;
      } else {
        humanScore > computerScore ? (result = "won") : (result = "lost");
        gameOver();
      }
    }
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
// playGame();
document.addEventListener("click", function (e) {
  let target = e.target.id;
  if (["rock", "paper", "scissors"].includes(target)) {
    playRound2(target);
  }
});
