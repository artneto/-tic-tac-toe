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
function play (id) {
    const cell = document.getElementById(id);
    turn = checkTurn? PLAYER_X : PLAYER_O;
    if (!cell.isTaken) {
        cell.textContent = turn;
        cell.isTaken = true;
        cell.classList.add(turn);
        checkWinner(turn);
        } else {
            console.log("Already taken");
        }
  
 
   }

//Game rules: who is the winner? // if there was a tie//if there is another round.

function checkWinner(turn){
    const winner = COMBINATION.some((comb) => {
        return comb.every((index) => {
            return cell[index].classList.contains(turn);

        })

    });

if (winner){
    endGame(turn);
}else if(checkTie()) {
    endGame();
}else {
     checkTurn = !checkTurn;
    }
}

function checkTie(){
    let x = 0;
    let o = 0;
  for (index in cell) {
      if(!isNaN(index)) {
        if(cell[index].classList.contains(PLAYER_X)) {
            x++;
        }
  
        if(cell[index].classList.contains(PLAYER_O)) {
            o++;
        }

    }
      
}

  return x + o === 9 ? true : false;
}

function endGame(winner = null) {
    const popBox =document.getElementById("pop-box");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let message= null;


    popBox.style.display="block";
    popBox.appendChild(h2);
    popBox.appendChild(h3);


    if (winner) {
        h2.innerHTML =  ` Player <span>${winner}</span> win `;
    }else {
        h2.innerHTML =  "Tie";
    }

    let countSeconds = 3;
     setInterval(()=>{ 
         h3.innerHTML = `Game will restart ${counterSeconds--}`;
         if(contSeconds < 0){
            location.reload();
         
         }
         
         },1000);
         
     setTimeout(() => location.reload(), 4000);

 }
