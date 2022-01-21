'use strict';

/* Code Challenge 1#
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Max'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  maxPrintGoals: function (...playerName) {
    for (let i = 0; i < playerName.length; i++) {
      // console.log(`The player ${playerName[i]} scored ${playerName.length}`);
    }
  },
};

// Code Challenge 1#

// 1.
// const [players1, players2] = game.players; // Usei spread, o certo era Destructuring
// console.log(players1);
// console.log(players2);

// 2
// const [gk, ...fieldPlayer] = players1;
// console.log(`Team 1: The goalkeeper: ${gk}, and field players: ${fieldPlayer}`);

// 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5.
// Meu jeito
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// Outra forma
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// Destructure the odds and turn it into a single object, then in this desctructure we destructure the
// odds object.

/*
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
*/
/*
  printGoals: function (...playerName) {
    for (let i = 0; i < playerName.length; i++) {
      console.log(`The player ${playerName[i]} scored ${playerName.length}`);
    }
  }

*/
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

/* 
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator. 
*/
// team1 > team2 && console.log('Team 1 is more likely to win '); // if TRUE runs console log
// team1 < team2 && console.log('Team 2 is more likely to win '); // if TRUE runs console log

/*************************************************************************************************/

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

//

// 1.

// for (const [goal, playerName] of game.scored.entries())
//   console.log(`Goal ${goal + 1}: ${playerName}`);

// 2.

// const odds = Object.values(game.odds);
// let avarage = 0;
// for (const odd of odds) avarage += odd;
// avarage /= odds.length; // fora do loop
// console.log(avarage); // fora do loop

// 3.

// for (const [team, odd] of Object.entries(game.odds)) {
//   let stringTeam = team === 'x' ? 'draw' : `victory ${game[team]}`; // Acessar a propriedade de um objeto utilizando uma array
//   console.log(`Odd of ${stringTeam}: ${odd}`);
// }

// 4.

// MINHA SOLUÇÃO
// const scorers = {};
// for (const [i, player] of game.scored.entries()) {
//   scorers.push(player, i);
// }
// console.log(game.scorers);

// RESPOSTA CORRETA
/* So the solution is to loop over the array, and add the array elements as object properties, 
and then increase the count as we encounter a new occurence of a certain element */
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/*************************************************************************************************/

/* Coding Challenge #3

Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK
*/

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🟡 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🟡 Yellow card'],
// ]);

// 1.

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2.

// gameEvents.delete(64);
// console.log(gameEvents);

// 3.

// const time = [...gameEvents.keys()].pop(); // Recebe o último elemento da array (92)
// console.log(time);

// console.log(`An event happened, on
// average, every ${time / gameEvents.size} minutes`);

// 4.
// const timeHalf = 45;

// for (const [gameTime, event] of gameEvents) {
// #Primeiro método
// if (gameTime < timeHalf) {
//   console.log(`[FIRST HALF] ${gameTime}: ${event}`);
// } else {
//   console.log(`[SECOND HALF] ${gameTime}: ${event}`);
// }
// #Segundo método
// gameTime < timeHalf
//   ? console.log(`[FIRST HALF] ${gameTime}: ${event}`)
//   : console.log(`[SECOND HALF] ${gameTime}: ${event}`);
// #Terceiro método
//   const half = gameTime < timeHalf ? '[FIRST' : '[SECOND';
//   console.log(`${half} HALF] ${gameTime}: ${event}`);
// }

/*************************************************************************************************/

/* Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document
  .querySelector('button')
  .addEventListener('click', function () {
    const camelNames = [];
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n'); // Transforma as strings em uma array
    for (const row of rows) {
      if (row.includes(',')) {
        const [first, second] = row
          .replace(',', '')
          .toLowerCase()
          .trim()
          .split('_');
        camelNames.push(
          first + second.replace(second[0], second[0].toUpperCase())
        );
      }
    }
    for (const [index, key] of camelNames.entries())
      console.log(`${key.padEnd(20)} ${'✅'.repeat(index + 1)}`); // if we just want padding with spaces we can just ommit
  });

// const camelCaseConverter = function (underscore_value) {
//   let names = underscore_value.toLowerCase().trim().split('_');
//   const [keyOne, keyTwo] = names;
//   const camelNames = [];
//   camelNames.push(keyOne);
//   camelNames.push(keyTwo.replace(keyTwo[0], keyTwo[0].toUpperCase()));
//   console.log(camelNames.join(''));
// };
