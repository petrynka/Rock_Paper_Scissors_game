const btn_rock = document.querySelector("#btn-rock");
const btn_paper = document.querySelector("#btn-paper");
const btn_scissors = document.querySelector("#btn-scissors");
const human_Score = document.querySelector(".human-score");
const comp_Score = document.querySelector(".computer-score");
const result = document.querySelector(".result");


function getComputerChoice(){
    let random = Math.floor(Math.random()*3+1);
    let compChoice
    if (random == 1) {
        return compChoice = "Rock"
    } else if(random == 2){
        return compChoice = "Paper"
    } else {
        return compChoice = "Scissors"
    }
}

let humanScore = 0;
let computerScore = 0;


btn_rock.addEventListener("click", () => {
    let compChoice = getComputerChoice();
    if(compChoice == "Scissors"){
        humanScore++;
        human_Score.textContent = `You ${humanScore}`;
        console.log("You win!");
    } else if(compChoice == "Rock"){
        console.log("Its a tie");
    } else {
        computerScore++;
        comp_Score.textContent = `${computerScore} Comp`;
        console.log("Computer win");
    }

    if (humanScore === 5) {
        result.textContent = "Congratulation! You Win!"
    } else if(computerScore === 5) {
        result.textContent = "Sorry! You Loose!"
    }
});

btn_paper.addEventListener("click", () => {
    let compChoice = getComputerChoice();
    if(compChoice == "Rock"){
        humanScore++;
        human_Score.textContent = `You ${humanScore}`;
        console.log("You win!");
    } else if(compChoice == "Paper"){
        console.log("Its a tie");
    } else{
        computerScore++;
        comp_Score.textContent = `${computerScore} Comp`;
        console.log("Computer win");
    }

    if (humanScore === 5) {
        result.textContent = "Congratulation! You Win!"
    } else if(computerScore === 5) {
        result.textContent = "Sorry! You Loose!"
    }
});

btn_scissors.addEventListener("click", () => {
    let compChoice = getComputerChoice();
    if(compChoice == "Paper"){
        humanScore++;
        human_Score.textContent = `You ${humanScore}`;
        console.log("You win!");
    } else if(compChoice == "Scissors"){
        console.log("Its a tie");
    } else{
        computerScore++;
        comp_Score.textContent = `${computerScore} Comp`;
        console.log("Computer win");
    }

    if (humanScore === 5) {
        result.textContent = "Congratulation! You Win!"
    } else if(computerScore === 5) {
        result.textContent = "Sorry! You Loose!"
    }
});



