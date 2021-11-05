/*jshint esversion: 6 */
/*jshint esversion: 7*/
/*jshint esversion: 8*/
/*jshint globalstrict: true*/
/* jshint node: true */

"use strict";

function computerSelection() {
  const items = ["rock", "paper", "scissors"];

  const computerSelection = Math.floor(Math.random() * items.length);

  return items[computerSelection];
}

function playerSelection() {
  const playerSelection = prompt(
    'Choose one: "rock" "paper" or "scissors"'
  ).toLowerCase();
  return playerSelection;
}

function playRound(computerSelection, playerSelection) {
  //rock choice
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "paper") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "rock") {
      return `It's a draw!`;
    } else {
      return `something went wrong.`;
    }
  }
  //paper choice
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "scissors") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "paper") {
      return `It's a draw!`;
    } else {
      return "Something went wrong.";
    }
  }
  //scissors choice
  else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "rock") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "scissors") {
      return `It's a draw!`;
    } else {
      return "Something went wrong.";
    }
  } else {
    return "Invalid choice.";
  }
}

function game() {
  for (let round = 0; round < 5; round++) {
    console.log(playRound(playerSelection(), computerSelection()));
  }
}

game();
