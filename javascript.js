var computerOptions = ["r", "p", "s"];

var wins = 0; 
var losses = 0; 
var ties = 0; 

var instructions = document.getElementById("instructions");
var playerChoice = document.getElementById("player-choice");
var computerChoice = document.getElementById("computer-choice");
var winCount = document.getElementById("wins-count");
var lossCount = document.getElementById("losses-count");
var tieCount = document.getElementById("tie-count");

document.onkeyup = function(event) {
    var userSelect = event.key; 

    var computerRandom = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    if ((userSelect === "r") || (userSelect === "s") || (userSelect === "p")) {
        if ((userSelect === "r" && computerRandom === "s") || (userSelect === "s" && computerRandom === "p") || (userSelect === "p" && computerRandom === "r")) {
            wins++;
        } else if (userSelect === computerRandom) {
            ties++; 
        } else {
            losses++; 
        }

        instructions.textContent = "";

        playerChoice.textContent = "You chose: " + userSelect; 
        computerChoice.textContent = "The computer chose: " + computerRandom; 
        winCount.textContent = "Wins: " + wins; 
        lossCount.textContent = "Losses: " + losses; 
        tieCount.textContent = "Ties: " + ties; 
    }
};