'use strict';
// '📈 Too high!' : '📉 Too low!'
// 💥 You lost the game!

let SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// startTheGame
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // Quando não existe input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    // Quando um player vence
  } else if (guess === SECRET_NUMBER) {
    document.querySelector('.number').textContent = SECRET_NUMBER;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Se o número escolhido é maior que o número secreto
  } else if (guess > SECRET_NUMBER) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      // Game-over
    } else {
      document.querySelector('.number').textContent = SECRET_NUMBER;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = '#B22222';
    }

    // Se o número escolhido é menor que o número secreto
  } else if (guess < SECRET_NUMBER) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      // Game-over
    } else {
      document.querySelector('.number').textContent = SECRET_NUMBER;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = '#B22222';
    }
  }
});

// resetTheGame
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
