"use strict";
// selecting buttons
const inputButton1 = document.querySelector("#Function-press1");
const inputButton2 = document.querySelector("#Function-press2");
const inputButton3 = document.querySelector("#Function-press3");
const inputButton4 = document.querySelector("#Function-press4");
const inputButton5 = document.querySelector("#Function-press5");
const inputButton6 = document.querySelector("#Function-press6");
const inputButton7 = document.querySelector("#Function-press7");
const inputButton8 = document.querySelector("#Function-press8");
const inputButton9 = document.querySelector("#Function-press9");
// function 1
function alerthello() {
  alert("hello");
}
inputButton1.addEventListener("click", alerthello);
// function 2
function chackmyage() {
  const currentYear = 2025;
  const myBirthDay = prompt("enter the year in which your were born");
  alert(
    `you are ${
      currentYear - myBirthDay
    } years old, since you were born in ${myBirthDay}`
  );
}
inputButton2.addEventListener("click", chackmyage);
// function 3
function checknumber() {
  const number = prompt("enter the number");
  if (number % 2 === 0) {
    alert(`the number ${number} is even since it is divisible by 2`);
  } else {
    alert(`the number ${number} is odd since it is not divisible by 2`);
  }
}
inputButton3.addEventListener("click", checknumber);
// function 4
function upperorlowercase() {
  const letter = prompt("enter a single letter");
  if (!letter || letter.length !== 1) {
    alert("please enter a single letter");
    return;
  }
  const code = letter.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    alert(`the letter ${letter} is uppercase`);
  } else if (code >= 97 && code <= 122) {
    alert(`the letter ${letter} is lowercase`);
  } else {
    alert(`the letter ${letter} is not an English letter`);
  }
}
inputButton4.addEventListener("click", upperorlowercase);

// function 5
function rockPaperScissors() {
  let playerScore = 0;
  let cpuScore = 0;
  let rounds = 0;
  while (true) {
    let playerChoice = prompt("Rock, Paper or Scissors?!");
    if (!playerChoice) {
      alert("Game Over!");
      return;
    }
    playerChoice = playerChoice.toLowerCase().trim();
    if (playerChoice === "quit") {
      alert(
        `Game Over!\nFinal Score - You: ${playerScore}, Computer: ${cpuScore}`
      );
      return;
    }
    // if player choice is not either rock paper or scissors then alert massage and continue the loop
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      alert("Invalid choice! Please enter rock, paper, or scissors.");
      continue;
    }
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const cpuChoice = choices[randomIndex];
    let result;
    if (playerChoice === cpuChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && cpuChoice === "scissors") ||
      (playerChoice === "paper" && cpuChoice === "rock") ||
      (playerChoice === "scissors" && cpuChoice === "paper")
    ) {
      result = "You win!";
      playerScore++;
    } else {
      result = "Computer wins!";
      cpuScore++;
    }
    rounds++;
    alert(`Round ${rounds}:
      You chose: ${playerChoice}
      Computer chose: ${cpuChoice}
      ${result}
      Score - You: ${playerScore}, Computer: ${cpuScore}`);
  }
}
inputButton5.addEventListener("click", rockPaperScissors);
