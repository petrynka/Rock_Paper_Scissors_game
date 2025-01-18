console.log("Hello World");

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

getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
