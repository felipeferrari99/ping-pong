let score = document.querySelector("#score");
let winner = document.querySelector("#winner")
let select = document.querySelector("#select");
let playerOne = 0;
let playerTwo = 0;
let target = 3;
const buttonOne = document.querySelector("#buttonOne");
const buttonTwo = document.querySelector("#buttonTwo");
const reset = document.querySelector("#reset-button");

function disable() {
    buttonOne.classList.add('disabled');
    buttonOne.disabled = true;
    buttonTwo.classList.add('disabled');
    buttonTwo.disabled = true;
}

function enable() {
    score.innerText = "0 x 0";
    winner.innerText = "";
    playerOne = 0;
    playerTwo = 0;
    buttonOne.classList.remove('disabled');
    buttonOne.disabled = false;
    buttonTwo.classList.remove('disabled');
    buttonTwo.disabled = false;
}

select.addEventListener("change", (event) => {
    target = select.value;
    enable()
});

buttonOne.addEventListener("click", () => {
    playerOne++
    score.innerText = `${playerOne} x ${playerTwo}`;
    if (playerOne == target){
        disable()
        score.innerText = `${playerOne} x ${playerTwo}`;
        winner.innerText = "PLAYER ONE WINS!"
    }
})

buttonTwo.addEventListener("click", () => {
    playerTwo++
    score.innerText = `${playerOne} x ${playerTwo}`;
    if (playerTwo == target){
        disable()
        score.innerText = `${playerOne} x ${playerTwo}`;
        winner.innerText = "PLAYER TWO WINS!"
    }
})

reset.addEventListener("click", () => {
    enable()
})