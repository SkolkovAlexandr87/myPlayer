
// put your code here...

const buttonOpenPlayer = document.querySelector(".button-open-player");
let flagOpenPlayer = false;

buttonOpenPlayer.addEventListener("click", openPlayer);

function openPlayer() {
  const containerPlayer = document.querySelector(".container-player");
 
  if(!flagOpenPlayer) {
    containerPlayer.classList.add("open-player");
    buttonOpenPlayer.classList.add("hidden-button");
    flagOpenPlayer = true;
  } else {
    containerPlayer.classList.remove("open-player");
    buttonOpenPlayer.classList.remove("hidden-button");
    flagOpenPlayer = false;
  }
  
}


