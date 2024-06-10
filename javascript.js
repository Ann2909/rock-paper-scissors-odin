console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;

let option1 = document.createElement("button");
option1.setAttribute("id", "rock");
option1.textContent = "Rock";

let option2 = document.createElement("button");
option2.setAttribute("id", "paper");
option2.textContent = "Paper";

let option3 = document.createElement("button");
option3.setAttribute("id", "scissor");
option3.textContent = "Scissor";

let optionContainer = document.querySelector("#options");
optionContainer.appendChild(option1);
optionContainer.appendChild(option2);
optionContainer.appendChild(option3);

let result = document.createElement("div");
result.setAttribute("id", "result");
let body = document.querySelector("#body");
body.appendChild(result);



optionContainer.addEventListener("click", (e) => {
    let computerSelection = getComputerChoice();
    let score = document.querySelector("#score");
    let target = e.target;
    switch(target.id) {
        case "rock":
            playRound("rock", computerSelection);
            score.textContent = `Current score is: You: ${humanScore} and Computer: ${computerScore}`;
            break;
        
        case "paper":
            playRound("paper", computerSelection);
            score.textContent = `Current score is: You: ${humanScore} and Computer: ${computerScore}`;
            break;
        
        case "scissor":
            playRound("scissor", computerSelection);
            score.textContent = `Current score is: You: ${humanScore} and Computer: ${computerScore}`;
            break;
    }
    
    if (humanScore === 5) {
        alert("You won the game!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("You lost the game");
        humanScore = 0;
        computerScore = 0;
    }
});

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

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        result.textContent = "This round's a draw!";
    } else if (computerSelection === "rock" && humanSelection === "paper") {
        result.textContent = "You win this round!";
        humanScore++;
    } else if (computerSelection === "rock" && humanSelection === "scissor") {
        result.textContent = "You lose this round!";
        computerScore++;
    } else if (computerSelection === "scissor" && humanSelection === "paper") {
        result.textContent = "You lose this round!";
        computerScore++;
    } else if (computerSelection === "scissor" && humanSelection === "rock") {
        result.textContent = "You win this round!";
        humanScore++;
    } else if (computerSelection === "paper" && humanSelection === "scissor") {
        result.textContent = "You win this round!";
        humanScore++;
    } else {
        result.textContent = "You lose this round!";
        computerScore++;
    }
}