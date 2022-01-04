'use strict';

let score = 20;
let highScore = 0;
let secretNumber = secretNumberGenerator();

function secretNumberGenerator() {
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  return randomNumber;
}

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

const displayHighscore = highscore =>
  (document.querySelector('.highscore').textContent = highscore);

const numberStyle = number =>
  (document.querySelector('.number').style.width = number);

const backgroundStyle = color =>
  (document.querySelector('body').style.backgroundColor = color);

const guessConverter = () => {
  let convertetString = Number(document.querySelector('.guess').value);
  return convertetString;
};

const resetTheGame = () => {
  score = 20;
  secretNumber = secretNumberGenerator();
  displayNumber('?');
  displayMessage('Comece a adivinhar...');
  displayScore(score);
  backgroundStyle('#222');
  numberStyle('15rem');
  document.querySelector('.guess').value = '';
};

const startTheGame = () => {
  const guess = guessConverter();

  if (!guess) {
    displayMessage('⛔️ Número inexistente!');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Número Correto!');
    backgroundStyle('#60b347');
    numberStyle('30rem');
    if (score > highScore) {
      highScore = score;
      displayHighscore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'
      );
      score--;
      displayScore(score);
    } else {
      displayNumber(secretNumber);
      numberStyle('30rem');
      displayMessage('💥 Você perdeu o jogo!');
      backgroundStyle('#B22222');
      displayScore(0);
    }
  }
};

// Start the Game
document.querySelector('.check').addEventListener('click', () => {
  startTheGame();
});

// Reset the Game
document.querySelector('.again').addEventListener('click', () => {
  resetTheGame();
});
