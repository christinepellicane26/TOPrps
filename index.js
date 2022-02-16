const choices = ["rock", "paper", "scissors"]
const winners =[];

function game(){
    for(let i = 0; i<=5; i++){
        playRound(i);
    }
    document.querySelector("button").textContent = "Play New Game"
    logWins();
  }

function playRound(round) {
   const humanSelection = humanChoice();
   const compSelection = compChoice();
   console.log("Computer chose "(compSelection));
   const winner = checkWinner(humanSelection, compSelection);
   winners.push(winner);
   logRound(humanSelection, compSelection, winner, round)
}
function humanChoice(){
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null){
        input = prompt("Please type Rock, Paper or Scissors");
        }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
        input = prompt(
            "Please type Rock, Paper, or Scissors with exact spelling.")
    };
    while (input == null){
        input = prompt("Please type Rock, Paper or Scissors");
        }
    input = input.toLowerCase();
    check = validateInput(input);
    
console.log(input);

function compChoice(){
    return choices[Math.floor(Math.random*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceH, choiceC){
    if(choiceH === choiceC){
        return "Tie";

    } else if (
        (choiceH === "rock" && choiceC == "scissors") ||
        (choiceH === "paper" && choiceC == "rock") || 
        (choiceH === "scissors" && choiceC == "paper")
        ) {
        return "Human"
    } else {
    return "Computer"
}
}

function logWins() {
    let humanWins = winners.filter((item) => item == "Human").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Human wins:", humanWins);
    console.log("Computer Wins:", compWins);
    console.log("Ties:", ties);
}

function logRound(humanChoice, compChoice, winner, round){
    console.log("Round: ", round);
    console.log("Human Chose:", humanChoice);
    console.log("Computer Chose:", compChoice);
    console.log(winner, "Won the Round!");
    console.log("☆*: .｡. o(≧▽≦)o .｡.:*☆");
}
}