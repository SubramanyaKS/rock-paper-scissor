const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const tr = document.getElementById("total");
const computerChoiceImg = document.getElementById('computer-choice-img');
const userChoiceImg = document.getElementById('user-choice-img')
const round = document.getElementById("round");
const rockpath ='images/rock.png'
const scissorpath='images/scissor.png'
const paperpath='images/papers.png'
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
  userChoiceImg.src=rockpath;
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
  userChoiceImg.src=paperpath;
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
  userChoiceImg.src=scissorpath;
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
    computerChoiceImg.src=rockpath;
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
    computerChoiceImg.src=paperpath;
  }
  if (randomNumber === 3) {
    computerChoice = "scissor";
    computerChoiceImg.src=scissorpath;
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
    // if(uc+cc<)
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Win ✔";
    uc += 1;
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "You Lose ❌";
    cc += 1;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You Lose ❌";
    cc += 1;
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "You Win ✔";
    uc += 1;
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "You Lose ❌";
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
    let element = document.getElementById('total');
    element.style.color = "#f00";
    console.log("Element",element.style.color);
    tr.innerHTML = `OH NO, YOU LOST THE GAME!`;
    setTimeout(() => {
      reset();
    }, 5000);
  } else if (uc > cc) {
    resultDisplay.innerHTML = " ";
    let element = document.getElementById('total');
    element.style.color = "#02a11f";
    console.log("Element",element.style.color);
    // element.toggle("myTrue");
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


document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const openBtnRule = document.getElementById('openBtnRule');
  const popup = document.getElementById("popup");
  const popuprule = document.getElementById("popup-rule");
  const closeBtn = document.getElementById("closeBtn");
  const closeBtnRule = document.getElementById("closeBtnRule");
  
  openBtnRule.addEventListener("click", function () {
    popuprule.style.display = "block";
});

  openBtn.addEventListener("click", function () {
      popup.style.display = "block";
  });

  closeBtnRule.addEventListener("click", function () {
    popuprule.style.display = "none";
});

  closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
  });

  // Close the pop-up if the user clicks outside of it
  window.addEventListener("click", function (event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
      if (event.target === popuprule) {
        popuprule.style.display = "none";
    }
  });
});


function info() {
  var infor = document.getElementById("info");
  infor.classList.toggle("mystyle");
}