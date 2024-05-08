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
//if user type something else, prompt again

function getHumanChoice() {
    let str1, str2;
    str1 = prompt("Choose rock, paper or scissor by typing in here: ", "rock");
    str2= str1.toLowerCase();
    if (str2 !== "rock" && str2 !== "paper" && str2 !== "scissor") {
        str1 = prompt("Choose rock, paper or scissor only, don't type anything else", "(example) rock");
        str2 = str1.toLowerCase();
    }
    let userChoice = str2;
    return userChoice;
}