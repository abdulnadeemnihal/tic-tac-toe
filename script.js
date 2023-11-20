const statusDisplay =document.querySelector('.game--status');

let gameActive =true;

let currentPlayer ="X";

let gameState= ["","","","","","","","",""];

const winningMessage= () => `player${currentPlayer} has won!`;
const drawMessage= () => `Game ended in a draw!`;
const currentPlayerTurn= () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

document.querySelectorAll('.cell').foreach(cell => cell.addEventListener('click',handleCellClick))
document.querySelector('.game--restart').addEventListener('click',handleRestartGmae);

function handleCellClick(clickCellEvent){
    const clickedCell = clickCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !=="" || !gameActive){
        return ;
    }
    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickCellIndex) {

    gameState[clickedCellIndex] =currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function handleResultValidation(){
    let roundwon=false;
    for(let i=0;i<=7;i++){
        const winCondition = winningCondition[i];
        let a =gameState[winCondition[0]];
        let b =gameState[winCondition[1]];
        let c =gameState[winCondition[2]];
        if(a ===' '|| b ===''||c ===''){
            continue;
        }
        if(a === b && b === c){
            roundwon = true;
            break;
        }
    }
    if(roundwon){
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}

function handlePlayerChange(){
    currentPlayer = currentPlayer ==="X" ? "0 ":"X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function handleRestartGame(){
    gameActive=true;
    currentPlayer = "X";
    gameState = ["","","","","","","","",""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
             .foreach(cell => cell.innerHTML ="");
}