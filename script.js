const rollButtonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const selectEl = document.getElementById("numberDropdown");
const ulEl = document.querySelector(".result");
const result = document.createElement("p");

rollButtonEl.addEventListener("click", () => {
  rollButtonEl.remove();
  animateDiceRoll();
 });

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  returnResult(rollResult);
}

function returnResult(rollResult) {
  const selectedBet = selectEl.options[selectEl.selectedIndex];
  const bet = selectedBet.value;
  if (rollResult.toString() === bet) {
    result.textContent = `You bet ${bet} and the dice rolled a ${rollResult}. You win!`;
    ulEl.append(result);
  } else {
    result.textContent = `You bet ${bet} and the dice rolled a ${rollResult}. You lost!`;
    ulEl.append(result);
  }
  playAgain();
}

function playAgain() {
  const playAgain = document.createElement("button");
  playAgain.classList.add("play-again");
  playAgain.textContent = "Play Again?";
  ulEl.append(playAgain);
  playAgain.addEventListener("click", () => {
    playAgain.remove();
    result.remove();
    animateDiceRoll();
  });
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

function animateDiceRoll () {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
}

