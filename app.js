"use strict";
let userScore = 0;
let computerScore = 0;
let playing = true;
const userScoreEl = document.querySelector(".score-board__box__user-score");
const computerScoreEl = document.querySelector(".score-board__box__comp-score");
const scoreBoard = document.querySelector(".score-board");

const result = document.querySelector(".result > p");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const gamePlay = document.querySelector(".btn--game-play");
const modal = document.querySelector(".game-play__modal");
const btnCloseModal = document.querySelector(".game-play__close-modal");

const overlay = document.querySelector(".game-play__overlay");

const newGame = document.querySelector(".btn--new");

const main = function () {
  rock.addEventListener("click", function () {
    playRound("Rock");
  });

  paper.addEventListener("click", function () {
    playRound("Paper");
  });

  scissors.addEventListener("click", function () {
    playRound("Scissors");
  });
};
main();

const getComputerChoice = function () {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const userWins = function (userChoice, computerChoice) {
  userScore++;
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
  if (userScore <= 4) {
    result.textContent = `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    result.textContent = `You won the game!`;
  }
};

const userLoses = function (userChoice, computerChoice) {
  computerScore++;
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
  if (computerScore <= 4) {
    result.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
  } else {
    result.textContent = `Computer won the game!`;
  }
};
const draw = function (userChoice, computerChoice) {
  result.textContent = `It's a draw!`;
};

const playRound = function (userChoice) {
  const computerChoice = getComputerChoice();
  if (userScore <= 4 && computerScore <= 4) {
    switch (userChoice + computerChoice) {
      case "RockScissors":
      case "PaperRock":
      case "ScissorsPaper":
        userWins(userChoice, computerChoice);
        break;
      case "ScissorsRock":
      case "RockPaper":
      case "PaperScissors":
        userLoses(userChoice, computerChoice);
        break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorsScissors":
        draw(userChoice, computerChoice);
        break;
    }
  }
};

const resetGame = function () {
  userScore = 0;
  computerScore = 0;
  userScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  result.textContent = `Make your move`;
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

gamePlay.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

newGame.addEventListener("click", resetGame);
