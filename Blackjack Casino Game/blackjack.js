
let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let player =
{
    name: "Harry",
    chips: 145
}

let messageEl = document.getElementById("message");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards);

function getRandomNumber() {
    let randomNo = Math.floor(Math.random() * 13) + 1;

    if (randomNo === 1) {
        return 11;
    }
    if (randomNo > 10) {
        return 10;
    }
    else {
        return randomNo;
    }
}

console.log(messageEl)

function onStart() {

    isAlive = true;

    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()

    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        // cardsEl.textContent="Cards: "+cards[i]+" ";
        cardsEl.textContent += cards[i] + " ";

    }

    sumEl.textContent = "Sum:" + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
    console.log(message)
}


function newCard() {

    console.log("Drawing a new card");

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber();

        cards.push(card);


        console.log(cards)
        sum += card;

        renderGame()
    }
}