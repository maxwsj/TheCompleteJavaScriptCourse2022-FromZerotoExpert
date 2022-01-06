'use strict';
// Starting conditions
let currentScore, activePlayer, playing, scores, victoryScore, winner;

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Functions for the game
const diceGenerator = () => Math.trunc(Math.random() * 6) + 1;
const diceImages = dice => (diceEl.src = `images/dice-${dice}.png`);
const addDiceEl = () => diceEl.classList.add('hidden');
const removeDiceEl = () => diceEl.classList.remove('hidden');

const addWinner = activePlayer =>
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--winner`);

const removeWinner = activePlayer =>
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);

const addActivePlayer = activePlayer =>
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--active`);

const removeActivePlayer = activePlayer =>
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--active`);

const addCurrentScoreText = () =>
  (document.getElementById(`current--${activePlayer}`).textContent = 0);

const addCurrentScore = currentScore =>
  (document.getElementById(`current--${activePlayer}`).textContent =
    currentScore);

const addActivePlayerScore = activePlayer =>
  (document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer]);

// Starting variables for the game function
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  victoryScore = 20;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;

  addDiceEl();
  removeWinner(0);
  removeWinner(1);
  addActivePlayer(0);
  removeActivePlayer(1);
  current0El.textContent = 0;
  current1El.textContent = 0;
};

init(); // starting the game

const switchPlayer = () => {
  addCurrentScoreText();
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Dice button
btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = diceGenerator();
    removeDiceEl();
    diceImages(dice);
    if (dice !== 1) {
      currentScore += dice;
      addCurrentScore(currentScore);
    } else {
      switchPlayer(activePlayer);
    }
  }
});

// Hold button
btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    addActivePlayerScore(activePlayer);
    if (scores[activePlayer] >= victoryScore) {
      playing = false;
      addDiceEl();
      addWinner(activePlayer);
      removeActivePlayer(activePlayer);
    } else {
      switchPlayer();
    }
  }
});

// Reseting the game
btnNew.addEventListener('click', init);
