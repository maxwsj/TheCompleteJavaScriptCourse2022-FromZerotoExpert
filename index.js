/*************** CODE CHALLENGE 1 FUNDAMENTALS  PART 1 ******************/
// TEST DATA 1:
// Marks weights 78 kg and is 1.69 m tall.
// John weights 92 kg and is 1.95 m tall.
const markKg = 78;
const markWeights = 1.69;
const markBMI = markKg / markWeights ** 2;

const johnKg = 92;
const johnWeights = 1.95;
const johnBMI = johnKg / johnWeights ** 2;

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
const markBMI = markKg / markWeights ** 2;

const johnKg = 85;
const johnWeights = 1.76;
const johnBMI = johnKg / johnWeights ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

/*************** CODE CHALLENGE 2 FUNDAMENTALS  PART 1 ******************/
const markKg = 78;
const markWeights = 1.69;
const markBMI = Math.floor(markKg / markWeights ** 2).toFixed(1);

const johnKg = 92;
const johnWeights = 1.95;
const johnBMI = Math.floor(johnKg / johnWeights ** 2).toFixed(1);

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

if (dalphinsAVG === koalasAVG && dalphinsAVG >= 100 && koalasAVG >= 100) {
  console.log(`Both win the trophy!`);
} else if (
  dalphinsAVG === koalasAVG ||
  (dalphinsAVG < 100 && koalasAVG < 100)
) {
  console.log(`There's a draw`);
} else if (dalphinsAVG > koalasAVG) {
  console.log(
    `The highest score is from Dalphins with ${dalphinsAVG}, so Dalphins is the winner`
  );
} else {
  console.log(
    `The highest score is from Koalas with ${koalasAVG}, so Koalas is the winner`
  );
}

// Outra possivel solução que pensei

if (dalphinsAVG > koalasAVG && dalphinsAVG >= 100) {
  // Dalphins não é maior que Koalas
  console.log(
    `The highest score is from Dalphins with ${dalphinsAVG}, so Dalphins is the winner`
  );
} else if (dalphinsAVG < koalasAVG && koalasAVG >= 100) {
  // Koalas não é maior que Dalphins [Então possuem valores iguais]
  console.log(
    `The highest score is from Koalas with ${koalasAVG}, so Koalas is the winner`
  );
} else if (dalphinsAVG >= 100 && koalasAVG >= 100) {
  // Testa se os valores iguais são maiores que 100 ou iguais a 100
  console.log(`Both win the trophy!`);
} else {
  // Se não são maiores que 100 ou iguais a 100 então são menores e é empate com perda
  console.log(`There's a draw`);
}

/*************** CODE CHALLENGE 4 FUNDAMENTALS PART 1  ******************/

// The switch Statement
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
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

total =
  bill >= 50 && bill <= 300
    ? bill + (tip = tip * 0.15)
    : bill + (tip = tip * 0.2);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);

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

const calAverage = (a, b, c) => ((a + b + c) / 3).toFixed(1);

let scoreDolhins = calAverage(55, 66, 70);
let scoreKoalas = calAverage(200, 200, 200);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins > avgKoalas * 2) {
    console.log(
      `Dolhins is the winner with a score of (${avgDolhins}) vs (${avgKoalas})`
    );
  } else if (avgKoalas > avgDolhins * 2) {
    console.log(
      `Koalas is the winner with a score of (${avgKoalas}) vs (${avgDolhins})`
    );
  } else {
    console.log(`Nobody is the winner`);
  }
};

checkWinner(scoreDolhins, scoreKoalas);

/*************** CODE CHALLENGE 2 FUNDAMENTALS PART 2 ******************/

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from first tip calculator 
challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually 
be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// Expression Function
const calcTip = function (bill) {
  return bills >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(
  `The total of the bills is (${bills}), the total of tips is (${tips}) and the total of tips and bills is (${totals})`
);

// Arrow Function

const calcTip = (bill) =>
  bills >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(
  `The total of the bills is (${bills}), the total of tips is (${tips}) and the total of tips and bills is (${totals})`
);

/*************** CODE CHALLENGE 2.1 FUNDAMENTALS PART 2 ******************/

// Create a sumary with all of your informations

const Max = {
  firstName: "Max",
  lastName: "William",
  birthYear: 1997,
  job: "Front-End Developer",
  friends: ["Pet", "João", "Bruno"],
  fiancee: "Andressa",
  pets: ["Nero", "Zoe"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSumary: function () {
    return `My name is ${this.firstName} ${
      this.lastName
    } I'am ${this.calcAge()} years old, I'am a ${this.job}, I love my fiancee ${
      this.fiancee
    } 
      and I have ${this.pets.length} pets called ${
      this.pets
    } and currently I have ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license`;
  },
};

console.log(Max.getSumary());

/*************** CODE CHALLENGE 3 FUNDAMENTALS PART 2 ******************/

/*
Let's go back to Mark and John comparing their BMIs! 
This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, 
and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the 
BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full 
name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = (this.mass / this.height ** 2).toFixed(1));
  },
  resume: function () {
    return `${this.firstName} ${this.lastName}'s BMI (${this.calcBMI()})`;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 120,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = (this.mass / this.height ** 2).toFixed(1));
  },
  resume: function () {
    return `${this.firstName} ${this.lastName}'s BMI (${this.calcBMI()})`;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(
  john.resume(),
  `${john.bmi >= mark.bmi ? "is higher" : "is lower"} than`,
  mark.resume()
);

/*************** CODE CHALLENGE 4 FUNDAMENTALS PART 2 ******************/
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) 
to calculate tips and total values (bill + tip) 
for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method 
to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 
'arr' as an argument. This function calculates the average of all numbers 
in the given array. This is a DIFFICULT challenge (we haven't done this before)! 
Here is how to solve it:
  4.1. First, you will need to add up all values in the array. 
To do the addition, start by creating a variable 'sum' that starts at 0. 
Then loop over the array using a for loop. In each iteration, 
add the current value to the 'sum' variable. 
This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated 
before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const arr = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / totals.length;
};

console.log(`Bills:                    ${bills}`);
console.log(`Total of tips:            ${tips}`);
console.log(`Total of bills with tips: ${totals}`);
console.log(`Total avarage of the bills with tips: ${calcAverage(totals)}`);

/*************** CODE CHALLENGE 5 FUNDAMENTALS PART 2 ******************/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let forecastDisplay = "";
  for (let i = 0; i < arr.length; i++) {
    forecastDisplay += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + forecastDisplay);
};

printForecast(data1);

/*************** Practice Assignments for JavaScript Fundamentals ******************/

/**************** JavaScript Fundamentals – Part 1 ****************/

/********** LECTURE: Values and Variables **********/

// /* 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions) */
const country = "Brasil";
const continent = "Ámerica do Sul";
let population = 212.6;

// /* 2. Log their values to the console */
console.log(country, continent, population);

// /********** LECTURE: Data Types **********/

// /* 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet */
let isIsland = true;
let language = "";

// /* 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console */
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// /********** LECTURE: let, const and var **********/

// /* 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one) */
language = "Português";

// /* 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const. */
const country = "Brasil";
const continent = "Ámerica do Sul";
let population = 212.6;
let isIsland = true;
let language = "";

// /* 3. Try to change one of the changed variables now, and observe what happens */
country = "Canada";

// /********** LECTURE: Basic Operators **********/

// /* 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half? */
let populationOP = population / 2 / 2;
console.log(population);

// /* 2. Increase the population of your country by 1 and log the result to the console */
let populationIncrease = population++;
console.log(population);

// /* 3. Finland has a population of 6 million. Does your country have more people than
// Finland? */
let finLand = 6.0;
console.log(population > finLand);

// /* 4. The average population of a country is 33 million people. Does your country
// have less people than the average country? */
let countryX = 33.0;
console.log(population > countryX);

// /* 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese' */
let description =
  country +
  " is in " +
  continent +
  " , and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// /********** LECTURE: Strings and Template Literals **********/

// /* 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax */
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// /********** LECTURE: Taking Decisions: if / else Statements **********/

// /* 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population) */
let populationX = 33.0;
console.log(
  population > populationX
    ? `${country}'s population is above average`
    : `${country}'s population is ${
        population - countryX
      } million below average`
);

// /* 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original */

population = 12;
console.log(
  population > populationX
    ? `${country}'s population is above average`
    : `${country}'s population is ${
        population - countryX
      } million below average`
);

population = 130;
console.log(
  population > populationX
    ? `${country}'s population is above average`
    : `${country}'s population is ${
        population - countryX
      } million below average`
);

population = 212.6;

/********** LECTURE: Type Conversion and Coercion **********/

/* 1. Predict the result of these 5 operations without executing them:
'9' - '5'; 4 CERTO
'19' - '13' + '17'; 617 CERTO
'19' - '13' + 17; 617 ERRADO | Primeiro vai realizar a subtração, e por isso a string torna-se número, e 6 + 17 = 23
'123' < 57; NaN ERRADO | Mesmo sendo do tipo string, o valor comparado será considerado como tipo númerico, pois não estamos utilizando o comparador de igualdade estrita
5 + 6 + '4' + 9 - 4 - 2; 43 ERRADO | Primeir realiza as expreções matemáticas (5 + 6) + '4' + (9 - 4 - 2) | (11) + '4' + (3) | e por fim tudo é concatenado (1143)
*/

/* 2. Execute the operations to check if you were right */

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

/********** LECTURE: Equality Operators: == vs. === **********/

/* 1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country have?'); */
let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

/* 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now) */
if (numNeighbours == 1) {
  console.log("Only 1 border!");
}

/* 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1 */
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else {
  console.log("More than 1 border");
}

/* 4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value) */
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours == 0) {
  console.log("No borders!");
} else {
  console.log("More than 1 border");
}

/* 5. Test the code with different values of 'numNeighbours', including 1 and 0. */
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours == 0) {
  console.log("No borders!");
} else if (numNeighbours >= 50 && numNeighbours <= 100) {
  console.log("That's a lot of borders");
} else {
  console.log("More than 1 border");
}

/* 6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening? */

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours === 0) {
  console.log("No borders!");
} else if (numNeighbours >= 50 && numNeighbours <= 100) {
  console.log("That's a lot of borders");
} else {
  console.log("More than 1 border");
}

/* 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1 */

numNeighbours = Number(numNeighbours);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours === 0) {
  console.log("No borders!");
} else if (numNeighbours >= 50 && numNeighbours <= 100) {
  console.log("That's a lot of borders");
} else {
  console.log("More than 1 border");
}

/* 8. Reflect on why we should use the === operator and type conversion in this
situation */

// Because we doesn't always know what kind of data we will receive from de user.

/********** LECTURE: Logical Operators **********/

/* 1. Comment out the previous code so the prompt doesn't get in the way 
 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
 3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary. 
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
 5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D) */

let country = "United States";
let language = "English";
let population = 32;
let isIsland = true;

if ((language = "English" && population < 33 && isIsland == false)) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

/********** LECTURE: The switch Statement **********/

/* 1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

let language = prompt(`What is your language? `);

switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`MOST number of native speakers!`);
    break;

  case "spanish":
    console.log(`2nd place in number of native speakers`);
    break;

  case "english":
    console.log(`3rd place`);
    break;

  case "hindi":
    console.log(`Number 4`);
    break;

  case "arabic":
    console.log(`5th most spoken language`);
    break;

  default:
    console.log(`Great language too :D`);
}

/********** LECTURE: The Conditional (Ternary) Operator **********/

/* 1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences! */

let population = 35;
const country = "Brasil";
console.log(
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);

/* 2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

// Teste DATA 13
population = 13;
console.log(
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);

// Teste DATA 130
population = 130;
console.log(
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);

console.log();

/*********** JavaScript Fundamentals – Part 2 ***********/

/* LECTURE: Functions */

/* 1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki' */
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

/* 2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */

const countryData1 = describeCountry("Brazil", 212.6, "Brasilia");
console.log(countryData1);

const countryData2 = describeCountry("Japão", 125.8, "Toquio");
console.log(countryData2);

const countryData3 = describeCountry("Canada", 994, "Ottawa");
console.log(countryData3);

/*LECTURE: Function Declarations vs. Expressions */

/* 1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population */
/* 2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100 */
/* 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console */
const percentageOfBrasil1 = percentageOfWorld1(brasilPopulation);

const percentageOfCanada2 = percentageOfWorld1(canadaPopulation);

const percentageOfJapao3 = percentageOfWorld1(japaoPopulation);

console.log(
  `${countryData1} and represents ${percentageOfBrasil1}  of the world population`
);
console.log(
  `${countryData2} and represents ${percentageOfJapao3}  of the world population`
);
console.log(
  `${countryData3} and represents ${percentageOfCanada2}  of the world population`
);

function percentageOfWorld1(population) {
  let worldPopulation = 7900;
  return ((population * 100) / worldPopulation).toFixed(1) + "%";
}

/* 4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */

const brasilPopulation = 212.6;
const canadaPopulation = 994;
const japaoPopulation = 125.8;

const percentageOfWorld2 = function (population) {
  let worldPopulation = 7900;
  return ((population * 100) / worldPopulation).toFixed(1) + "%";
};

const percentageOfBrasil = percentageOfWorld2(brasilPopulation);
const percentageOfCanada = percentageOfWorld2(canadaPopulation);
const percentageOfJapao = percentageOfWorld2(japaoPopulation);

console.log(
  `${countryData1} and represents ${percentageOfBrasil}  of the world population`
);
console.log(
  `${countryData2} and represents ${percentageOfJapao}  of the world population`
);
console.log(
  `${countryData3} and represents ${percentageOfCanada}  of the world population`
);

/* LECTURE: Arrow Functions */

/* 1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

const brasilPopulation1 = 212.6;
const canadaPopulation2 = 994;
const japaoPopulation3 = 125.8;

const percentageOfWorld3 = (population) => {
  let worldPopulation = 7900;
  return ((population * 100) / worldPopulation).toFixed(1) + "%";
};

const percentageOfBrasil1 = percentageOfWorld3(brasilPopulation1);
const percentageOfCanada2 = percentageOfWorld3(canadaPopulation2);
const percentageOfJapao3 = percentageOfWorld3(japaoPopulation3);

console.log(
  `${countryData1} and represents ${percentageOfBrasil1} of the world population`
);
console.log(
  `${countryData2} and represents ${percentageOfJapao3} of the world population`
);
console.log(
  `${countryData3} and represents ${percentageOfCanada2} of the world population`
);

/* LECTURE: Functions Calling Other Functions */

/* 1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.' */
/* 2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier */
const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfBrasil1} of the world.`;
};

// describePopulation('Brasil', 212.600);
// /* 3. Call 'describePopulation' with data for 3 countries of your choice */
const brasil = describePopulation("Brasil", 212.6);
const canada = describePopulation("Canada", 90);
const japao = describePopulation("Japão", 134);
console.log(brasil);
console.log(canada);
console.log(japao);

/* LECTURE: Introduction to Arrays */

/* 1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations' */

const populations = [99, 400, 100, 200];

/* 2. Log to the console whether the array has 4 elements or not (true or false) */

console.log(populations.length === 4);

/* 3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values */

const population = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];

console.log(population);

/* LECTURE: Basic Array Operations (Methods) */ //

/* 1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours' */

const neighbours = ["Argentina", "Peru", "Colombia"];

/* 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array */

neighbours.push("Utopia");

console.log(neighbours);

/* 3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array */

neighbours.pop();

console.log(neighbours);

/* 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D' */

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

/* 5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

neighbours[neighbours.indexOf("Argentina")] = "Venezuela";
console.log(neighbours[0]);

/* LECTURE: Introduction to Objects */

/* 1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments) */

const myCountry = {
  country: "Brasil",
  capital: "Brasilia",
  language: "Português",
  population: 224.0,
  neighbours: ["Argentina", "Peru", "Colombia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million
        ${this.language}-speaking people,
        ${this.neighbours.length} neighbouring countries and a
        capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};

/* LECTURE: Dot vs. Bracket Notation */

/* 1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.' */

console.log(`${myCountry.country} has ${myCountry.population} 
million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}`);

/* 2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation. */

myCountry.population += 2;
myCountry["population"] -= 2;

/* LECTURE: Object Methods */

/* 1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword. */
/* 2. Call the 'describe' method */

console.log(myCountry.describe());

/* 3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property. */

console.log(myCountry.checkIsland());

/* LECTURE: Iteration: The for Loop */

/* 1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/
for (let i = 0; i < 50; i++) {
  console.log(`Voter number ${[i]} is currently voting`);
}

/* LECTURE: Looping Arrays, Breaking and Continuing */

/* 1. Let's bring back the 'populations' array from a previous assignment */
/* 2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier */

function percentageOfWorld(population) {
  let worldPopulation = 7900;
  return ((population * 100) / worldPopulation).toFixed(1) + "%";
}

const populations = [99, 400, 100, 200];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld(populations[i]);
  percentages2.push(perc);
}

console.log(`Population percentages are: ${percentages2}`);

/* 3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is */

/* LECTURE: Looping Backwards and Loops in Loops */

/* 1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']]; */

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

/* 2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country */

console.log(listOfNeighbours.length); // verifica o tamanho da array
console.log(listOfNeighbours[0].length); // verifica o tamanho da array dentro da array
console.log(listOfNeighbours[0][0]); // acessa a array que está na posição 0 e acessa seu elemento da posição 0

listOfNeighbours[0];

/* 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway � */

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

/* Primeiro passo: No primeiro for ele vai obter o tamanho total da array, 
determinando o tamanho do loop */
/* Segundo passo: No segundo for, ele vai verificar o tamanho da array dentro da array 
listOfNeighbours[i].length, realizando a quantidade de loop em cima desse tamanho*/
/* Terceiro passo: Vai realizar o console.log(`Neighbour: ${listOfNeighbours[i][y]} onde
[i] = a posição atual do loop (Primeiro Loop)
[y] = a posição do segundo loop
Vai acessar a posição i[0] a partir do primeiro loop e y[0], realizar o loop novamente com base
no tamanho da array dentro da array (neste caso é 2)
e novamente vai acessar a posição i[0] a partir do primeiro loop e y[1], finalizando
o primeiro loop
*/

/* LECTURE: The while Loop */

/* 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3') */

function percentageOfWorld(population) {
  let worldPopulation = 7900;
  return ((population * 100) / worldPopulation).toFixed(1) + "%";
}

const populations = [99, 400, 100, 200];

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);

/* 2. Recreate the challenge from the lecture 'Looping Backwards and Loops in Loops',
but this time using a while loop */

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

let i = 0;
let y = 0;

while (i < listOfNeighbours.length) {
  while (y < listOfNeighbours[i].length) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    y++;
  }
  y = 0;
  i++;
}
