const newCard = document.getElementById("newCard")
const startGame = document.getElementById("startGame")
let player = {
    name: "Thabo",
    chips: "11000"
}
let cards = []
let dealerCards = []
let sum = 0
let dealerSum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let dealerCardEl = document.getElementById("dealer-cards")
let dealerSumEl = document.getElementById("dealer-sum-el")


playerEl.textContent = player.name + ": R" + player.chips

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    let cardValue = randomNumber > 10 ? 10 : randomNumber
    let cardImage = ""


    let suits = ["hearts", "diamonds", "spades", "clubs"]
    let randomSuit = suits[Math.floor(Math.random() * 4)]

    if (randomNumber === 1) {
        cardImage = "images/ace_of_" + randomSuit + ".png"
        cardValue = 11
    } else if (randomNumber === 11) {
        cardImage = "images/jack_of_" + randomSuit + ".png"
    } else if (randomNumber === 12) {
        cardImage = "images/queen_of_" + randomSuit + ".png"
    } else if (randomNumber === 13) {
        cardImage = "images/king_of_" + randomSuit + ".png"
    } else {
        cardImage = "images/" + randomNumber + "_of_" + randomSuit + ".png"
    }

    return { value: cardValue, image: cardImage }
}

function renderDealerCards() {
    dealerCardEl.innerHTML = ""
    dealerSumEl.textContent = "Sum: " + dealerSum

    for (let i = 0; i < dealerCards.length; i++) {
        let cardImage = document.createElement("img")
        cardImage.src = dealerCards[i].image
        cardImage.style.width = "100px"
        dealerCardEl.appendChild(cardImage)
    }
}

startGame.addEventListener("click", function () {
    isAlive = true

    dealerCards = [];
    dealerSum = 0;

    for (let i = 0; i < 2; i++) {
        let newCard = getRandomCard()
        dealerCards.push(newCard)
        dealerSum += newCard.value
    }

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard.value + secondCard.value
    cards = [firstCard, secondCard]

    renderGame()
    renderDealerCards();
})

function renderGame() {
    cardEl.innerHTML = "Cards: "


    for (let i = 0; i < cards.length; i++) {
        let cardImage = document.createElement("img")
        cardImage.src = cards[i].image
        cardImage.style.width = "100px"  
        cardEl.appendChild(cardImage)
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

newCard.addEventListener("click", function () {
    if (!hasBlackjack && isAlive) {
        let newCard = getRandomCard()
        sum += newCard.value
        cards.push(newCard)
        renderGame()
    }
})

