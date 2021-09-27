const cell = document.querySelectorAll(".cell");
let checkTurn=true;
const PLAYER_X="X";
const PLAYER_O="O";

document.addEventListener("click", (event) =>{
    if(event.target.matches(".cell")){
    play(event.target.id);
    }

});

function play(id){
    const cell = document.getElementById(id);
    turn = checkTurn ? PLAYER_X : PLAYER_O;
    cell.textContent = turn;
    checkTurn=checkTurn;
}