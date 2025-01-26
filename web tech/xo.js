const sq = document.getElementsByClassName("square");
const PLAYERS = ["O", "X"];
let currentPlayer = 0;
const reset = document.getElementById("reset");
reset.onclick = function()
{
  for(let i =0;i<9;i++)
  {
    sq[i].textContent = "";
    document.getElementById("winner").textContent = "";


  }
  if(currentPlayer == 0) currentPlayer =  1 ;
  else currentPlayer = 0;
  win = false;
  play(currentPlayer);
}
const combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
document.getElementById("turn").textContent = `${PLAYERS[currentPlayer]}'s Turn` ;
let win = false;

function checkwin() {
  for (let i = 0; i < 8; i++) {
    let value = combination[i];
    console.log(sq[value[0]]);
    if (
      sq[value[0]].textContent != "" && sq[value[0]].textContent == sq[value[1]].textContent && sq[value[1]].textContent == sq[value[2]].textContent) {
      document.getElementById("winner").textContent = `WINNER IS ${sq[value[0]].textContent}`;
      win = true;
      return;
    }
  }
}
function play(currentPlayer = 0){
  for (let i = 0; i < sq.length; i++) {
    sq[i].addEventListener("click", () => {
      if (sq[i].textContent != "" || win){
         return;
      }
      sq[i].textContent = PLAYERS[currentPlayer];
      currentPlayer = 1 - currentPlayer;
      checkwin();
      if (!win) {
        document.getElementById("turn").textContent = `${PLAYERS[currentPlayer]}'s Turn` ;
      }
    });
  }
}
play();