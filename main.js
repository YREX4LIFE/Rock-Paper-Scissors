// Declare rock paper scissors string variables
const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'
// Make the Computer choose one
const randNum = Math.floor(Math.random() * (4 - 1)) + 1;
  
function choosePlay(num) {
  if (num === 1) {
    return rock
  } else if (num === 2) {
    return paper
  } else {
    return scissors
  }
}

const computerChoice = choosePlay(randNum)


// Choose Rock Paper or Scissors Here
const userChoice = 'paper'


// Compare the User's choice with the Computer's choice
console.log(`The computer's choice is ${computerChoice}!`)
console.log(`The user's choice is ${userChoice}!`)
if (computerChoice === userChoice) {
  console.log('Draw!')
} else if (computerChoice === 'rock' && userChoice === 'paper'){
  console.log('You Win!')
} else if (computerChoice === 'paper' && userChoice === 'scissors') {
  console.log('You Win!')
} else if (computerChoice === 'scissors' && userChoice === 'paper') {
  console.log('You Lose')
} else if (computerChoice === 'rock' && userChoice === 'scissors') {
  console.log('You Lose')
} else if (computerChoice === 'scissors' && userChoice === 'rock') {
  console.log('You Win!')
} else if (computerChoice === 'paper' && userChoice === 'rock') {
  console.log('You Lose')
} else {
  console.log('Please enter a valid input!')
}
