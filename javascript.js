console.log("Hello, World!");
//pseudocode to get a random choice in the rock paper scissor game
//create a function named getComputerChoice
//use Math.random() to get a random number from 0-1
//multiply the return of that random function to get a number from 0 - 100 and round up that number using round()
//if number is higher than or eqault to 30 and smaller than 70, give scissor
//if number is higher than 70, give rock
//if number is smaller than 30

function getComputerChoice() {
    let num = Math.ceil(Math.random()*100);
    if (num >= 30 && num <= 70) {
        return "scissor";
    } else if (num > 70) {
        return "rock";
    } else {
        return "paper";
    }
}

//pseudocode to get the user choice
//create a function named getHumanChoice
//prompt the user to type in rock, paper or scissor, default value is rock and assign to a variable
//include all forms of rock, paper and scissor, case insensitive string method to another variable
//if user type something else, prompt again and keep prompting again until user type in a rock, paper or scissor

function getHumanChoice() {
    let str1, str2;
    str1 = prompt("Choose rock, paper or scissor by typing in here: ", "rock");
    str2 = str1.toLowerCase();
    while (str2 !== "rock" && str2 !== "paper" && str2 !== "scissor") {
        str1 = prompt("Choose rock, paper or scissor only, don't type anything else", "(example) rock");
        str2 = str1.toLowerCase();
    }
    return str2;
}

let humanScore = 0;
let computerScore = 0;

//pseudocode to play a single round
//create a function named playRound taking humanChoice and computerChoice as parameter/arguments
//the logic is rock beats scissor, scissor beats paper and paper beats rock
//if humanChoice and computerChoice are the same, no score increase, display "a draw"
//if computerChoice is rock and humanChoice is paper, human wins, humanScore increments by 1, display you win
// ...                 rock ..                 scissor...         computerScore increments by 1, display computer wins
//                     scissor                 paper              computerScore increments by 1, ...
//                     scissor                 rock               humanScore increments by 1, ...
//                     paper                   scissor            humanScore increments by 1, ...
//                     paper                   rock               computerScore increments by 1, ...

function playRound(humanChoice, computerChoice) {
    console.log(`computer chose ${computerSelection} and you chose ${humanSelection} so...`)
    if (humanSelection === computerSelection) {
        console.log("It's draw!");
    } else if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win!");
        humanScore++;
    } else if (computerSelection === "rock" && humanSelection === "scissor") {
        console.log("You lose!");
        computerScore++;
    } else if (computerSelection === "scissor" && humanSelection === "paper") {
        console.log("You lose!");
        computerScore++;
    } else if (computerSelection === "scissor" && humanSelection === "rock") {
        console.log("You win!");
        humanScore++;
    } else if (computerSelection === "paper" && humanSelection === "scissor") {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
  }
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);
