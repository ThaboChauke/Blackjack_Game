let player = {
    name: "Thabo",
    chips: "11000"
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": R" + player.chips

function getRandomCard() {
    // Generate a random card number between 1 and 13 (Ace to King)
    let randomNumber = Math.floor(Math.random() * 13) + 1
    let cardValue = randomNumber > 10 ? 10 : randomNumber
    let cardImage = ""

    // Assign card image paths based on card number and suit
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

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard.value + secondCard.value
    cards = [firstCard, secondCard]
    
    renderGame()
}

function renderGame() {
    cardEl.innerHTML = "Cards: "

    // Render each card image
    for (let i = 0; i < cards.length; i++) {
        let cardImage = document.createElement("img")
        cardImage.src = cards[i].image
        cardImage.style.width = "100px"  // Set card width
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

function newCard() {
    if (!hasBlackjack && isAlive) {
        let newCard = getRandomCard()
        sum += newCard.value
        cards.push(newCard)
        renderGame()
    }
}
