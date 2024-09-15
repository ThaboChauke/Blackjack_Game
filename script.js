let firstCard = 10
let secondCard = 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")


function startGame() {
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
    let thirdCard = 5
    sum += thirdCard
    cards.push(thirdCard)

    renderGame()
}

function getRandomCard() {
    
}