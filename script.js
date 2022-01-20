//Computer randomly selects

let playerPoints = 0;
let computerPoints = 0;

function computerPlay () {
    //Create array with the three string options
    const options = ['rock', 'paper', 'scissors'];
    //Randomly return one option
    return (options[Math.floor(Math.random ()*3)]);
}

function game () {
       
    const playerEntry = prompt (`Enter your selection. Options are
    Rock
    Paper
    Scissors`);
    //If else below as cancel buttion is throwing error due to 'null'
    if (playerEntry===null) {
        console.log ('No entry detected!')
    }
    //What happens if cancel button is not pressed
    else {
    const computerSelection = computerPlay();
    const playerSelection = playerEntry.toLowerCase();

    console.log ('Computer selection is ' + computerSelection);
    console.log ('Player selected ' + playerSelection);

    //Switch case to evaluate results after player enters
    switch (true) {

        case (playerSelection===computerSelection):
            console.log ('You both selected ' + computerSelection + '. One point each!');
            playerPoints++;
            computerPoints++;
            break;

        case ((computerSelection==='paper' && playerSelection==='rock') || (computerSelection==='scissors' && playerSelection==='paper') || (computerSelection==='rock'&&playerSelection==='scissors')):
            console.log (`You lose! ${computerSelection} beats ${playerSelection}`);
            computerPoints++;
            break;

        case ((playerSelection==='paper' && computerSelection==='rock') || (playerSelection==='scissors' && computerSelection==='paper') || (playerSelection==='rock'&&computerSelection==='scissors')):
            console.log (`You WIN!!! ${playerSelection} beats ${computerSelection}`);
            playerPoints++;
            break;

        default:
            console.log ('Invalid Entry! Please try again.');   
    }
    console.log (`Score Update: Player = ${playerPoints}, Computer = ${computerPoints}`);

    /*

    if (playerSelection!='rock' && playerSelection!='paper' && playerSelection!='scissors') {
        alert ('Invalid Entry! Please try again.')
    }
    else if (playerSelection===computerSelection) {
        console.log ('You both selected ' + computerSelection)
    }
    */
    }
}

//Play game five times
for(i=0; i<5; i++) {
    game();
}




