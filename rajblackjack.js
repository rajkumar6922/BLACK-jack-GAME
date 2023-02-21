let player = {
    name: "rajkumar",
    chips: 123,
};
let first_Number;
let second_Number;
let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageElement = document.getElementById("message-el");
let sumElement = document.getElementById("sum-el");
let paraElement = document.getElementById("para-el");
let playerElement = document.getElementById("player-el");
playerElement.textContent = player.name + ":$ " + player.chips;

function getRandomNumber() {
    return Math.floor(Math.random() * 13) + 1;
}

function startgame() {
    first_Number = getRandomNumber();
    second_Number = getRandomNumber();
    cards = [first_Number, second_Number];
    sum = first_Number + second_Number;
    rendergame();
}

function rendergame() {
    paraElement.textContent = "cards:";
    for (let i = 0; i < cards.length; i++) {
        paraElement.textContent = paraElement.textContent + cards[i] + " ";
    }
    sumElement.textContent = "sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a New card?";
    } else if (sum === 21) {
        message = "Whooo!! you have got a Black Jack!!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!!";
        isAlive = true;
    }
    messageElement.textContent = message;
}

function newbutton() {

    let card = getRandomNumber();
    sum += card;
    cards.push(card);
    console.log(cards);
    rendergame();


}