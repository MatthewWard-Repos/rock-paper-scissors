const init = function () {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  const textBox = document.querySelector(".results");
  const textHuman = document.querySelector(".human");
  const textComputer = document.querySelector(".computer");
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;
  let finished = false;
  body.style.backgroundColor = "rgb(44, 42, 46)";
  textBox.style.borderColor = "white";
  content.style.color = "white";
  const getComputerChoice = function () {
    const choiceC = Math.floor(Math.random() * 3);
    return choiceC === 1 ? "Rock" : choiceC === 2 ? "Paper" : "Scissors";
  };
  const reset = function () {
    humanScore = 0;
    computerScore = 0;
    round = 1;
    finished = false;
    textHuman.textContent = humanScore;
    textComputer.textContent = computerScore;
    textBox.textContent = "Let's Play!";
    textBox.style.borderColor = "white";
    body.style.backgroundColor = "rgb(44, 42, 46)";
    content.style.color = "white";
  };

  const playRound2 = function (choice) {
    const computer = getComputerChoice();
    const human = choice;
    let winner = human;
    let result;

    endRound = function (winner, result) {
      gameOver = function () {
        finished = true;
        if (winner === human) {
          body.style.backgroundColor = "green";
        } else {
          body.style.backgroundColor = "red";
        }
        content.style.color = "white";
        textBox.style.borderColor = "white";
        textBox.textContent = `You ${result} the game! ${human} ${
          human === computer ? "vs" : winner === human ? "beats" : "beaten by"
        } ${computer}`;
        setTimeout(reset, 3000);
      };
      getWinnerResult = function () {
        if (human === computer) {
          result = "drew";
        } else {
          (human === "Rock" && computer === "Scissors") ||
          (human === "Paper" && computer === "Rock") ||
          (human === "Scissors" && computer === "Paper")
            ? ((winner = human), (result = "won"))
            : ((winner = computer), (result = "lost"));
        }
      };
      updateScore = function () {
        if (human === computer) {
          null;
        } else {
          winner === human ? humanScore++ : computerScore++;
        }
        textHuman.textContent = humanScore;
        textComputer.textContent = computerScore;
      };

      printResult = function () {
        if (!(humanScore === 5 || computerScore === 5)) {
          textBox.textContent = `You ${result} round ${round}!
         ${human} ${
            human === computer ? "vs" : winner === human ? "beats" : "beaten by"
          } ${computer}
        ${human === computer ? " - No winner" : ""} `;

          round++;
        } else {
          humanScore > computerScore ? (result = "won") : (result = "lost");
          gameOver();
        }
      };
      getWinnerResult();
      updateScore();
      printResult();
    };

    endRound(winner, result);
  };
  // playGame();
  const button = document.querySelectorAll(".button");

  button.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      let target = e.target.id;
      if (["rock", "paper", "scissors"].includes(target) && finished === false) {
        playRound2(target.toUpperCase().slice(0, 1) + target.slice(1));
      }
    })
  );
};
init();
