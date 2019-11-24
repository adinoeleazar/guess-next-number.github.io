var scoreElement = document.getElementById('score')
var currentNumberElement = document.getElementById('now')
var highScoreElement = document.getElementById('highscore')

function increaseScore() {
  var score = parseInt(scoreElement.innerHTML) + 1
  scoreElement.innerHTML = score
  if (score > parseInt(highScoreElement.innerHTML)) {
    highScoreElement.innerHTML = score
  }
}

function decreaseScore() {
  var score = parseInt(scoreElement.innerHTML) - 1
  scoreElement.innerHTML = score
}

function highRiskHighReward() {
  var score = parseInt(scoreElement.innerHTML) + 10
  scoreElement.innerHTML = score
  if (score > parseInt(highScoreElement.innerHTML)) {
    highScoreElement.innerHTML = score
  }
}

function iWinTheJackpot() {
  var score = parseInt(scoreElement.innerHTML) * 2
  scoreElement.innerHTML = score
  if (score > parseInt(highScoreElement.innerHTML)) {
    highScoreElement.innerHTML = score
  }
}

function badLuck() {
  var score = parseInt(scoreElement.innerHTML) * 0
  scoreElement.innerHTML = score
  if (score > parseInt(highScoreElement.innerHTML)) {
    highScoreElement.innerHTML = score
  }
}


function checkLowerNumber() {
  var currentNumber = parseInt(currentNumberElement.innerHTML)
  var randomNumber = Math.round(Math.random() * 10)

  if (randomNumber === 10) {
    iWinTheJackpot()
    alert('"I WIN THE JACKPOT!" - Congrats! you get 10 from your randomed number. Your score has been multiplied by 2')
  }
  else if (randomNumber === 0) {
    badLuck()
    alert('"BAD LUCK" - Unfortunately, you get 0 from your randomed number. Your score has been reset to 0')
  }
  else if (currentNumber > randomNumber) {increaseScore()}
  else {
    if (scoreElement.innerHTML > 0) {decreaseScore()}
  }
  currentNumberElement.innerHTML = randomNumber
}

var lowerButton = document.getElementById('lowerButton')
lowerButton.addEventListener('click', checkLowerNumber)


function checkHigherNumber() {
  var currentNumber = parseInt(currentNumberElement.innerHTML)
  var randomNumber = Math.round(Math.random() * 10)

  if (randomNumber === 10) {
    iWinTheJackpot()
    alert('"I WIN THE JACKPOT!" - Congrats! you get 10 from your randomed number. Your score has been multiplied by 2')
  }
  else if (randomNumber === 0) {
    badLuck()
    alert('"BAD LUCK" - Unfortunately, you get 0 from your randomed number. Your score has been reset to 0')
  }
  else if (currentNumber < randomNumber) {increaseScore()}
  else {
    if (scoreElement.innerHTML > 0) {decreaseScore()}
  }
  currentNumberElement.innerHTML = randomNumber
}

var higherButton = document.getElementById('higherButton')
higherButton.addEventListener('click', checkHigherNumber)


function checkEqualNumber() {
  var currentNumber = parseInt(currentNumberElement.innerHTML)
  var randomNumber = Math.round(Math.random() * 10)

  if (currentNumber === randomNumber) {
    highRiskHighReward()
    alert('"HIGH RISK HIGH REWARD" - Wow! that was like 10 percent probability and yet you managed to guess correctly. You deserve 10 points!')
  }
  if (randomNumber === 10) {
    iWinTheJackpot()
    alert('"I WIN THE JACKPOT!" - Congrats! you get 10 from your randomed number. Your score has been multiplied by 2')
  }
  else if (randomNumber === 0) {
    badLuck()
    alert('"BAD LUCK" - Unfortunately, you get 0 from your randomed number. Your score has been reset to 0')
  }
  else if (currentNumber !== randomNumber) {
    if (scoreElement.innerHTML > 0) {decreaseScore()}
  }
  currentNumberElement.innerHTML = randomNumber;
}

var equalButton = document.getElementById('equalButton')
equalButton.addEventListener('click', checkEqualNumber)