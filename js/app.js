const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

const rk= document.getElementById('rock1');
const pa = document.getElementById('paper1');
const sc = document.getElementById('scissor1');

const cs = document.getElementById('computer-score');
const us = document.getElementById('user-score');
let cc=0;
let uc=0;


rk.addEventListener('click', function () {
    userChoice="rock";
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
})
pa.addEventListener('click', function () {
    userChoice="paper";
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
})
sc.addEventListener('click', function () {
    userChoice="scissor";
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
})

let userChoice;
let computerChoice;
let result;


// possibleChoices.forEach(pc => pc.addEventListener('click',(e)=>{
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML=userChoice;
//     generateComputerChoice();
//     getResult();
// }))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)+1;
    //console.log(randomNumber);
    
    if(randomNumber===1){
        computerChoice="rock";
    }
    if(randomNumber===2){
        computerChoice="paper";
    }
    if(randomNumber===3){
        computerChoice="scissor";
    }
    computerChoiceDisplay.innerHTML=computerChoice;
    

}

function reset(){
    window.location.reload();
}

function getResult(){
    if(userChoice===computerChoice){
        result="It's a Draw";
        cc==cc;

    }
    if(computerChoice==="rock" && userChoice==="paper"){
        result="You Win";
        uc+=1;
    }
    if(computerChoice==="rock" && userChoice==="scissor"){
        result="You Lose";
        cc+=1;
        uc==uc;
    }
    if(computerChoice==="paper" && userChoice==="rock"){
        result="You Lose";
        cc+=1;
    }
    if(computerChoice==="paper" && userChoice==="scissor"){
        result="You Win";
        uc+=1;
    }
    if(computerChoice==="scissor" && userChoice==="paper"){
        result="You Lose";
        cc+=1;
    }
    if(computerChoice==="scissor" && userChoice==="rock"){
        result="You Win";
        uc+=1;
    }
    resultDisplay.innerHTML=result;
    cs.innerHTML=cc;
    us.innerHTML=uc;
}