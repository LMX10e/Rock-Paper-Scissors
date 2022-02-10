
const ROCK = 'r';
const PAPER = 'p';
const SCISSORS = 's';


function getComputerOption(){
   let num = Math.floor(Math.random() * 3);

    if (num === 1) return 'r';
    if (num === 2) return 'p';
    if (num === 3) return 's';
}


function getUserOption() {
 // alert("Rock, Paper and Scissors Game!");
  alert("Choose one of the following option");
 // alert("----------------------------------");
  alert("(r) for rock, (p) for paper, (s) for scissors");
 
  let c = prompt("Chose: ");  
  
  while (c != 'r' && c != 'p' && c != 's')
    {
        alert("Pleas enter one of the following options only.");
        alert("(r) for rock, (p) for paper, (s) for scissors");
        let c = prompt("Chose: ");
    }

   return c;
}

function showSelectedOption(option){
   if (option === 'r') { alert("Rock"); }
   if (option === 'p') { alert("Paper"); }
   if (option === 's') { alert("Scissors"); }
}

function chooseWinner(uChoice, cChoice)
{
    if (uChoice === ROCK && cChoice === PAPER) { alert("Computer Wins! Paper wraps Rock."); }
    else if (uChoice === PAPER && cChoice === SCISSORS) { alert("Computer Wins! Scissors cut Paper."); }
    else if (uChoice === SCISSORS && cChoice === ROCK) { alert("Computer Wins! Rock smashes Scissors."); }
    else if (uChoice === ROCK && cChoice === SCISSORS) { alert("You Win! Rock smashes Scissors."); }
    else if (uChoice === PAPER && cChoice === ROCK) { alert("You Win! Paper wraps Rock."); }
    else if (uChoice === SCISSORS && cChoice === PAPER) { alert("You Win! Scissors cuts Paper."); }
        else { alert("Tie. Play again win the Game."); }
}

function game() 
{
    let uChoice;
    let cChoice;

    uChoice = getUserOption();
    alert("Your choice is: ");
    showSelectedOption(uChoice);


    cChoice = getComputerOption();
    alert("Computers choice is: ");
    showSelectedOption(cChoice);

    chooseWinner(uChoice, cChoice);
}
