

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

let humanChoice;

function getHumanChoice(){
    humanChoice = prompt("Please write your Rock, Paper or Scissors choice", "");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let hC = humanChoice.toLowerCase();
    let cC = computerChoice.toLowerCase();

    if(hC == "rock" || hC == "paper" || hC == "scissors"){
        if(hC=="rock"&&cC=="scissors"||
            hC=="paper"&&cC=="rock"||
            hC=="scissors"&&cC=="paper"){
             humanScore++
             console.log(`You win! ${humanChoice} beats ${computerChoice}`);
             console.log(`Your score: ${humanScore}`);
             console.log(`Computer score ${computerScore}`);
            } else if(hC=="rock"&&cC=="rock"||
                      hC=="paper"&&cC=="paper"||
                      hC=="scissors"&&cC=="scissors"){
                         console.log("This time it's a draw, try again.")
                      } else{
                         computerScore++
                         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                         console.log(`Your score: ${humanScore}`);
                         console.log(`Computer score ${computerScore}`);
                      }
    }else{
        console.log("You entered wrong value!")
    }            
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

