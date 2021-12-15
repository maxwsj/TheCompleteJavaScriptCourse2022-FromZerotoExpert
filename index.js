/*************** CODE CHALLENGE 1 FUNDAMENTALS  PART 1 ******************/
// TEST DATA 1: 
// Marks weights 78 kg and is 1.69 m tall. 
// John weights 92 kg and is 1.95 m tall.
const markKg = 78;
const markWeights = 1.69;
const markBMI = markKg / ( markWeights ** 2);

const johnKg = 92;
const johnWeights = 1.95;
const johnBMI = johnKg / ( johnWeights ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

///////////////////////////////////////
// TEST DATA 2: 
// Marks weights 95 kg and is 1.88 m tall. 
// John weights 85 kg and is 1.76 m tall.
const markKg = 95;
const markWeights = 1.88;
const markBMI = markKg / ( markWeights ** 2);

const johnKg = 85;
const johnWeights = 1.76;
const johnBMI = johnKg / ( johnWeights ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

/*************** CODE CHALLENGE 2 FUNDAMENTALS  PART 1 ******************/
const markKg = 78;
const markWeights = 1.69;
const markBMI = Math.floor(markKg / ( markWeights ** 2)).toFixed(1);

const johnKg = 92;
const johnWeights = 1.95;
const johnBMI = Math.floor(johnKg / ( johnWeights ** 2)).toFixed(1);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}


/*************** CODE CHALLENGE 3 FUNDAMENTALS  PART 1 ******************/
/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. 
Don't forget that there can be a draw, so test for that as well 
(draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. 
With this rule, a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, 
as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score 
and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const dalphinsAVG = (50 + 50 + 50) / 3;
const koalasAVG = (50 + 50 + 50) / 3;

// dalphinsAVG === koalasAVG && dalphinsAVG >= 100 && koalasAVG >= 100

if (dalphinsAVG === koalasAVG && dalphinsAVG >= 100 && koalasAVG >= 100 ) {
	console.log(`Both win the trophy!`);
} else if (dalphinsAVG === koalasAVG || dalphinsAVG < 100 && koalasAVG < 100 ) {
	console.log(`There's a draw`);
} else if (dalphinsAVG > koalasAVG){
	console.log(`The highest score is from Dalphins with ${dalphinsAVG}, so Dalphins is the winner`);
} else {
	console.log(`The highest score is from Koalas with ${koalasAVG}, so Koalas is the winner`); 
}

// Outra possivel solução que pensei

if (dalphinsAVG > koalasAVG && dalphinsAVG >= 100){ 
// Dalphins não é maior que Koalas
	console.log(`The highest score is from Dalphins with ${dalphinsAVG}, so Dalphins is the winner`);
} else if (dalphinsAVG < koalasAVG && koalasAVG >= 100) { 
// Koalas não é maior que Dalphins [Então possuem valores iguais]
	console.log(`The highest score is from Koalas with ${koalasAVG}, so Koalas is the winner`); 
} else if (dalphinsAVG >= 100 && koalasAVG >= 100) { 
// Testa se os valores iguais são maiores que 100 ou iguais a 100 
	console.log(`Both win the trophy!`);
} else { 
// Se não são maiores que 100 ou iguais a 100 então são menores e é empate com perda
	console.log(`There's a draw`);
}

/*************** CODE CHALLENGE 4 FUNDAMENTALS PART 1  ******************/

// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

/*************** CODE CHALLENGE 5 FUNDAMENTALS PART 1 ******************/
/*
Steven wants to build a very simple tip calculator for whenever he goes eating 
in a resturant. In his country, 
it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement, 
and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, 
and the final value (bill + tip). 
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let bill = 400;
let tip = bill;

total = bill >= 50 && bill <= 300 ? bill + (tip = (tip * 0.15)) : bill + (tip = (tip * 0.20));

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);



/*************** CODE CHALLENGE 1 FUNDAMENTALS PART 2 ******************/
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! 
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated 
(so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. 
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' 
that takes the average score of each team as parameters 
('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, 
together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calAverage = (a, b, c) => ((a + b + c)/3).toFixed(1);

let scoreDolhins = calAverage(55, 66, 70);
let scoreKoalas = calAverage(200, 200, 200);

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins > avgKoalas * 2) {
        console.log(`Dolhins is the winner with a score of (${avgDolhins}) vs (${avgKoalas})`);
    } else if (avgKoalas > avgDolhins * 2) {
        console.log(`Koalas is the winner with a score of (${avgKoalas}) vs (${avgDolhins})`);
    } else {
        console.log(`Nobody is the winner`);
    }
}

checkWinner(scoreDolhins, scoreKoalas);