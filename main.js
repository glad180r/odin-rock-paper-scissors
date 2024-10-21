// Main Code
let humanScore = 0;
let computerScore = 0;

const resultsDisplay = document.querySelector('.results');
const humanScoreDisplay = document.querySelector('.human-score');
const computerScoreDisplay = document.querySelector('.computer-score');
main()

// Function Declarations
function getComputerChoice(){
    // Randomly chooses the computer's choice from the options: rock, paper, scissors
    let rand = Math.random();
    if(rand > 0 && rand <=0.33){
        return 'rock';
    }else if(rand > 0.33 && rand <= 0.66){
        return 'paper';
    }else{
        return 'scissors'
    }
}


function playRound(humanChoice){
    // Rock beats Scissors
    // Paper beats Rock
    // Scissors beats Paper
    let computerChoice = getComputerChoice();

    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if(humanChoice === 'rock'){
        if(computerChoice === 'rock'){
            console.log('Tie round!');
            resultsDisplay.textContent = 'Tie round!';
        }else if(computerChoice === 'scissors'){
            console.log('You win the round! Rock beats Scissors!');
            resultsDisplay.textContent = 'You win the round! Rock beats Scissors!';
            ++humanScore; // Increment score for human
        }else if(computerChoice === 'paper'){
            console.log('You lose the round! Paper beats Rock!');
            resultsDisplay.textContent = 'You lose the round! Paper beats Rock!';
            ++computerScore; // Increment score for computer
        }
    }

    if(humanChoice === 'paper'){
        if(computerChoice === 'rock'){
            console.log('You win the round! Paper beats Rock!');
            resultsDisplay.textContent = 'You win the round! Paper beats Rock!';
            ++humanScore; // Increment score for human
        }else if(computerChoice === 'scissors'){
            console.log('You lose the round! Scissors beats Paper!');
            resultsDisplay.textContent = 'You lose the round! Scissors beats Paper!';
            ++computerScore; // Increment score for computer
        }else if(computerChoice === 'paper'){
            console.log('Tie round!');
            resultsDisplay.textContent = 'Tie round!';
        }
    }


    if(humanChoice === 'scissors'){
        if(computerChoice === 'rock'){
            console.log('You lose the round! Rock beats Scissors!');
            resultsDisplay.textContent = 'You lose the round! Rock beats Scissors!';
            ++computerScore; // Increment score for computer
        }else if(computerChoice === 'scissors'){
            console.log('Tie round!');
            resultsDisplay.textContent = 'Tie round!';
        }else if(computerChoice === 'paper'){
            console.log('You win the round! Scissors beats Paper!');
            resultsDisplay.textContent = 'You win the round! Scissors beats Paper!';
            ++humanScore; // Increment score for human
        }
    }

    // update the running score at end of each round
    humanScoreDisplay.textContent = `YOU: ${humanScore}`;
    computerScoreDisplay.textContent = `COMPUTER: ${computerScore}`;

    const SCORE_TO_END_GAME = 5;
    if(humanScore === SCORE_TO_END_GAME){
        resultsDisplay.textContent = 'YOU WON THE GAME!!!'
    } else if(computerScore === SCORE_TO_END_GAME){
        resultsDisplay.textContent = 'SORRY! COMPUTER WINS!!!'
    }
}




function main(){
    const rockBtn = document.querySelector('.rock-btn');
    rockBtn.addEventListener('click', ()=>{
        playRound('rock');
    })

    const paperBtn = document.querySelector('.paper-btn');
    paperBtn.addEventListener('click', ()=>{
        playRound('paper');
    })

    const scissorsBtn = document.querySelector('.scissors-btn');
    scissorsBtn.addEventListener('click', ()=>{
        playRound('scissors');
    })
}






