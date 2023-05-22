console.log("Hi")
var playerScore =0
var  computerScore =0;


function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock")
    {
        if(computerSelection == "paper")
        {
            computerScore++;
            return "You Lose! Paper beats Rock"
        }
        else if(computerSelection == "rock"){
            return "Draw! Rock draws with Rock"
        }
        else{
            playerScore++;
            return "You Win! Rock beats Scissors"
        }
    }
    if(playerSelection === "paper")
    {
        if(computerSelection == "paper")
        {
            return "Draw! Paper draws with Paper"
        }
        else if(computerSelection == "rock"){
            playerScore++;
            return "You Win! Rock beats Scissors"
        }
        else{
            computerScore++;
            return "You Lose! Scissors beats Paper"
        }
    }
    if(playerSelection === "scissors")
    {
        if(computerSelection == "paper")
        {
            playerScore++;
            return "You Win! Scissors beats Paper"
        }
        else if(computerSelection == "rock"){
            computerScore++;
            return "You Lose! Rock beats Scissors"
        }
        else{
            
            return "Draw! Scissors draw with Scissors"
        }
    }
}


function getComputerChoice(){
    const selection = Math.floor(Math.random() * 3);
    if(selection == 0)
    {
        return "rock"
    }
    else if(selection == 1)
    {
        return "paper"
    }
    else{
        return "scissors"
    }
}




while(true)
{
    if(computerScore==5)
    {
        console.log("You Lose!")
        break;
    }
    if(playerScore==5)
    {
        console.log("You Win!")
        break;
    }
const playerSelection = prompt("Enter choice")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log("player:"+ playerScore+ " Computer:"+ computerScore)
}