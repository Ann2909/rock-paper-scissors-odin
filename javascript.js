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

function playRound(humanSelection, computerSelection) {
    console.log(`computer chose ${computerSelection} and you chose ${humanSelection} so...`)
    if (humanSelection === computerSelection) {
        console.log("This round's a draw!");
    } else if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win this round!");
        humanScore++;
    } else if (computerSelection === "rock" && humanSelection === "scissor") {
        console.log("You lose this round!");
        computerScore++;
    } else if (computerSelection === "scissor" && humanSelection === "paper") {
        console.log("You lose this round!");
        computerScore++;
    } else if (computerSelection === "scissor" && humanSelection === "rock") {
        console.log("You win this round!");
        humanScore++;
    } else if (computerSelection === "paper" && humanSelection === "scissor") {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("You lose this round!");
        computerScore++;
    }
  }

let humanScore = 0;
let computerScore = 0;


//pseudocode to Write the logic to play the entire game
//Mygame will play 5 rounds. write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
//Create a funtion named playGame
//FOR i = 0 to 5 to play 5 rounds
//each iteration calls the playRound function once
//after all rounds, compare the score
//if humanScore is higher than computerScore, human wins, else computer wins

function playGame() {
    console.log("Let's play a game of Rock Paper Scissor!")
    for (let i = 0; i < 5; i++) {
        console.log(`round ${i + 1}:`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You won the game");
    } else {
        console.log("You lose this game");
    }
}

if(confirm("Wanna a play a game of Rock Paper Scissor?")) {
    playGame();
} else {
    console.log("alright, bye!");
}
