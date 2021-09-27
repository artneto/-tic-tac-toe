//Define the players X and O.

const cell = document.querySelectorAll(".cell");
let checkTurn=true;
const PLAYER_X="X";
const PLAYER_O="O";

const COMBINATION =  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

document.addEventListener("click", (event) =>{
    if(event.target.matches(".cell")){
    play(event.target.id);
    }

});
//Function to check the turn from each player. Player X "true" is the first to play, Player O "false" is after Player X.
function play(id){
    const cell = document.getElementById(id);
    turn = checkTurn ? PLAYER_X : PLAYER_O;
    cell.textContent = turn;
    checkTurn=!checkTurn;
    checkWinner(turn);
}

//Game rules: who is the winner? // if there was a tie//if there is another round.

function checkWinner(event){


}