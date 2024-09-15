let firstCard = 10
let secondCard = 1
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""


function startGame() {
    if (sum <= 20) {    
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "YAY! You've got Blackjack! 🥳"
        hasBlackjack = true
    } else {
        message = "You are out of the game 😭"
        isAlive = false
    }
    console.log(message)
}