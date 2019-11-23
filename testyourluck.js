var scoreElement = document.getElementById('score')
var currentNumberElement = document.getElementById('now')

function increaseScore() {
  var score = parseInt(scoreElement.innerHTML)
  scoreElement.innerHTML = score + 1;
}

function decreaseScore() {
  var score = parseInt(scoreElement.innerHTML)
  scoreElement.innerHTML = score - 1
}

function highRiskHighReward() {
  var score = parseInt(scoreElement.innerHTML)
  scoreElement.innerHTML = score + 10;
}

function iWinTheJackpot() {
  var score = parseInt(scoreElement.innerHTML)
  scoreElement.innerHTML = score * 2;
}

function badLuck() {
  var score = parseInt(scoreElement.innerHTML)
  scoreElement.innerHTML = score * 0;
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