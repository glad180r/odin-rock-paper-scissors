
function getComputerChoice(){
    // Randomly chooses the computer's choice from the options: rock, paper, scissors
    let rand = Math.random();
    console.log(rand);
    if(rand > 0 && rand <=0.33){
        return 'rock';
    }else if(rand > 0.33 && rand <= 0.66){
        return 'paper';
    }else{
        return 'scissors'
    }
}

