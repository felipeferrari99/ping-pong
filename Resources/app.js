let score = document.querySelector("h1");
let winner = document.querySelector("h2")
let select = document.querySelector("#select");
let player1 = 0;
let player2 = 0;
let target = 3;
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const reset = document.querySelector("#reset-button");

function disable() {
    button1.classList.add('disabled');
    button1.disabled = true;
    button2.classList.add('disabled');
    button2.disabled = true;
}

function enable() {
    score.innerText = "0 x 0";
    winner.innerText = "";
    player1 = 0;
    player2 = 0;
    button1.classList.remove('disabled');
    button1.disabled = false;
    button2.classList.remove('disabled');
    button2.disabled = false;
}

select.addEventListener("change", (event) => {
    target = select.value;
    enable()
});

button1.addEventListener("click", () => {
    player1++
    score.innerText = `${player1} x ${player2}`;
    if (player1 == target){
        disable()
        score.innerText = `${player1} x ${player2}`;
        winner.innerText = "PLAYER ONE WINS"
    }
})

button2.addEventListener("click", () => {
    player2++
    score.innerText = `${player1} x ${player2}`;
    if (player2 == target){
        disable()
        score.innerText = `${player1} x ${player2}`;
        winner.innerText = "PLAYER TWO WINS"
    }
})

reset.addEventListener("click", () => {
    enable()
})