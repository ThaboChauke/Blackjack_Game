let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard,secondCard)
    renderGame()
}
 

function renderGame() {
    cardEl.textContent = "Cards: "

    for (let card = 0; card < cards.length; card++) {
        cardEl.textContent += cards[card] + " "
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
    console.log("Drawing a new card from the deck!")
    if (hasBlackjack === false && isAlive === true) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)

        renderGame()
    }
}

