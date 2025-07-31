let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".msg-container");
let message = document.querySelector("#message");

let turnX = true;
// we will use 2d array to keep track of the right things i mean the answer

const resetGame = () => {
  turnX = true;
  enableBoxes();
  messageContainer.classList.add("hide");
};

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked ");
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText;

    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    if ((position1Value != "", position2Value != "", position3Value != "")) {
      if (
        position1Value === position2Value &&
        position2Value === position3Value
      ) {
        // console.log(`Winner is ${position1Value}`);
        showWinner(position1Value);
      }
    }
  }
};
const showWinner = (winner) => {
  message.innerText = `Congratulations, Winner is ${winner}`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};
// if ((boxes[pattern[0]] === boxes[pattern[1]]) === boxes[pattern[2]]) {
//       console.log(`The winner is ${boxes[pattern[0]]} .`);
//     }

resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
