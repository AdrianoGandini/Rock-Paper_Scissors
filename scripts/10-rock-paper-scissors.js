let resultGame = JSON.parse(localStorage.getItem('resultGame')) || {
    Win: 0,
    Lost: 0,
    Tie: 0
}

function clickcomputerMove (){
    const randomNumber =  Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
    }else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }else{
        computerMove = 'scissors';
    }

    return computerMove;
}

function makeMove(playerMove){
    computerMove = clickcomputerMove()

    if (playerMove == computerMove){
        result = 'Tie';
        resultGame.Tie += 1;

    }else if ((playerMove == 'rock' && computerMove == 'scissors') ||
    (playerMove == 'paper' && computerMove == 'rock') ||
    (playerMove == 'scissors' && computerMove == 'paper')){
    result = 'Win';
    resultGame.Win += 1;                
    } else{
        result = 'Lost';
        resultGame.Lost += 1;
    }

    //Updating the HTML element result
    document.querySelector('.js-result').innerHTML = `You ${result}`



    //Updating the HTML element move
    document.querySelector('.js-move').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon"> / 
<img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`



    localStorage.setItem('resultGame', JSON.stringify(resultGame));
    
    updateScores()
}


function updateScores(){
    document.querySelector('.js-score').innerHTML = `Wins: ${resultGame.Win}, Losses: ${resultGame.Lost}, Ties: ${resultGame.Tie}`

}


function resetGame(){
    localStorage.removeItem('resultGame');
    resultGame.Win = 0,
    resultGame.Lost = 0,
    resultGame.Tie = 0
    updateScores();
}

updateScores()