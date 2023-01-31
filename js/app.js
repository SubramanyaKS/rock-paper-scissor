const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const tr = document.getElementById("total");
const round = document.getElementById("round");
const rk = document.getElementById("rock1");
const pa = document.getElementById("paper1");
const sc = document.getElementById("scissor1");
const cs = document.getElementById("computer-score");
const us = document.getElementById("user-score");

let cc = 0;
let uc = 0;
let roun = 0;
let curr = 0;

let userChoice;
let computerChoice;
let result;
let tt;

round.addEventListener("change", function (e) {
  e.preventDefault();
  console.log(e.target.value);
  roun = e.target.value;
});

rk.addEventListener("click", function () {
  userChoice = "rock";
  userChoiceDisplay.innerHTML = userChoice;
  if (roun > 0) {
    if (curr < roun) {
      generateComputerChoice();
      getResult();
      curr++;
      console.log(curr);
    } else {
      finishGame();
    }
  }
});
pa.addEventListener("click", function () {
  userChoice = "paper";
  userChoiceDisplay.innerHTML = userChoice;
  if (roun > 0) {
    if (curr < roun) {
      generateComputerChoice();
      getResult();
      curr++;
      console.log(curr);
    } else {
      finishGame();
    }
  }
});
sc.addEventListener("click", function () {
  userChoice = "scissor";
  userChoiceDisplay.innerHTML = userChoice;
  if (roun > 0) {
    if (curr < roun) {
      generateComputerChoice();
      getResult();
      curr++;
      console.log(curr);
    } else {
      finishGame();
    }
  }
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function reset() {
  window.location.reload();
}

function getResult() {
  if (userChoice === computerChoice) {
    result = "It's a Draw 🤝";
    cc == cc;
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Win ✔";
    uc += 1;
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "You Lose ✖";
    cc += 1;
    uc == uc;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You Lose ✖";
    cc += 1;
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "You Win ✔";
    uc += 1;
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "You Lose ✖";
    cc += 1;
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "You Win ✔";
    uc += 1;
  }

  resultDisplay.innerHTML = result;
  cs.innerHTML = cc;
  us.innerHTML = uc;
}

function finishGame() {
  if (uc < cc) {
    resultDisplay.innerHTML = " ";
    tr.innerHTML = `OH NO, YOU LOST THE GAME!`;
    setTimeout(() => {
      reset();
    }, 5000);
  } else if (uc > cc) {
    resultDisplay.innerHTML = " ";
    tr.innerHTML = `CONGRATULATIONS, YOU WON THE GAME! `;
    setTimeout(() => {
      reset();
    }, 5000);
  } else {
    resultDisplay.innerHTML = "";
    tr.innerHTML = `THIS GAME WAS A DRAW!`;
    setTimeout(() => {
      reset();
    }, 5000);
  }
}

function info() {
  var infor = document.getElementById("info");
  infor.classList.toggle("mystyle");
}