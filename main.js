// Main Code
let humanScore = 0;
let computerScore = 0;
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

function getHumanChoice(){
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}


function playRound(){
    // Rock beats Scissors
    // Paper beats Rock
    // Scissors beats Paper
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if(humanChoice === 'rock'){
        if(computerChoice === 'rock'){
            console.log('Tie round!');
        }else if(computerChoice === 'scissors'){
            console.log('You win the round! Rock beats Scissors!');
            ++humanScore; // Increment score for human
        }else if(computerChoice === 'paper'){
            console.log('You lose the round! Paper beats Rock!');
            ++computerScore; // Increment score for computer
        }
    }

    if(humanChoice === 'paper'){
        if(computerChoice === 'rock'){
            console.log('You win the round! Paper beats Rock!');
            ++humanScore; // Increment score for human
        }else if(computerChoice === 'scissors'){
            console.log('You lose the round! Scissors beats Paper!');
            ++computerScore; // Increment score for computer
        }else if(computerChoice === 'paper'){
            console.log('Tie round!');
        }
    }


    if(humanChoice === 'scissors'){
        if(computerChoice === 'rock'){
            console.log('You lose the round! Rock beats Scissors!');
            ++computerScore; // Increment score for computer
        }else if(computerChoice === 'scissors'){
            console.log('Tie round!');
        }else if(computerChoice === 'paper'){
            console.log('You win the round! Scissors beats Paper!');
            ++humanScore; // Increment score for human
        }
    }
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound();
    }

    if(humanScore > computerScore){
        console.log(`You won the game!`);
    }else if(computerScore > humanScore){
        console.log(`You lost the game!`);
    }
}


function main(){
    playGame();
}
