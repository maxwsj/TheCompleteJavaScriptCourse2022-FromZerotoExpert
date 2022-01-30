'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('------ FOR OF --------');

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------ FOR EACH --------');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

/////////////////////////////////////////////////

// console.log('------ FOR OF (CURRENT INDEX) --------');

// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${index}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------ FOR EACH (CURRENT INDEX) --------');

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index}: You withdrew ${Math.abs(movement)}`);
//   }
// });

/////////////////////////////////////////////////
// forEach With Maps and Sets

// forEach with MAPS
// console.log('----- FOR EACH WITH MAP -----');
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // forEach with SETS
// console.log('----- FOR EACH WITH SET -----');
// const currenciesUnique = new Set([
//   'USD',
//   'USD',
//   'EUR',
//   'EUR',
//   'GBP',
//   'GBP',
//   'GBP',
// ]);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

//////////////////////  Application Codes  ///////////////////////////

///////////// CREATE USERNAME /////////////

// Computing Usernames
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);

// FUNTION TO UPDATE UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////// DISPLAY BALANCE /////////////
// Creating our Current Balance for the application (Balance is the total amount of the account)

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0); // Gerando uma propriedade que recebe a soma de todos os valores da conta
  labelBalance.textContent = `${acc.balance} €`; // Insere o valor total da conta no elemento HTML
};

///////////// DISPLAY MOVEMENTS /////////////
// Creating DOM Elements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // Troca o conteúdo da classe movements por um conteúdo vazio.

  // Create a shallow copy and we will sort it
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // afterbegin: Any new child element will apper before all the other child elements that were already there
  });
};

///////////// DISPLAY SUMMARY /////////////
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // We want just interests above 1
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// The interest is 1.2% of the deposited amount

///////////// EVENT HANDLER /////////////
let currentAccount;

// LOGIN EVENT HANDLER
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // We use optional chaining ( ? )  to remove the error when there's no account
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`; // A paartir do resultado da array, acessamos o index da posição [0]

    // Changing the opacity
    containerApp.style.opacity = 100; // Altera a opacidade e mostra a tela, caso as condições de login sejam satisfeitas

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''; // Podemos fazer desta forma porque a leitura ocorre da direita para a esquerda

    // Remove the cursor focus on the inputs
    inputLoginUsername.blur();
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});
///////////// IMPLEMENTING TRANSFERS /////////////
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount); // Adicionando valor negativo ao usuário atual aapós transferir
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

///////////// IMPLEMENTING THE REQUEST A LOAN  /////////////
// Regra do emprestimo: Deve existir uma movimentaçãoa maior que 10% do emprestimo solicitado
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update de UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

///////////// CLOSING ACCOUNT (USING THE FIND INDEX METHOD) /////////////
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // Check if the input user is currently iqual to the current user
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete acount
    accounts.splice(index, 1);
    // Hide UI From user
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

///////////// IMPLEMENTING SORTING BUTTON /////////////
// Creating a stating variable that is going to monitore if it is sorting or not
let sorted = false;
// Will be implemented in the display movements
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // Depois que a função displayMovements() é executada e o sorted alterado, restauramos o sorted novamente para o seu valor inicial
  sorted = !sorted;
});

///////////////////////  STUDY LECTURES  //////////////////////////
// The Map Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// const movementUSD = movements.map(mov => Math.trunc(mov * euroToUsd));

// console.log(movementUSD);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

/////////////////////////////////////////////////
// // Computing Usernames

// const createUserName = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUserName(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
// The filter Method

// Usually we use the filter Method with a boolean expression
const deposits = movements.filter(mov => mov > 0);

// console.log(movements);
// console.log(deposits);

// Mini Challenge
// Only withdrawals
const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals); // [-400, -650, -130]

/////////////////////////////////////////////////
// The Reduce Method

// console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// Creating our Current Balance for the application
// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };

// calcDisplayBalance(account1.movements);

// Find the Maximum value of an array

// Never put a 0 as current value in the end when you are triying to find aa maximun or a minimum value, always go with the first value of the array

const calcMaximum = function (movements) {
  const maximumValue = movements.reduce((acc, mov, i) => {
    console.log(`Iteration ${i}: ${acc}`);
    if (acc > mov) return acc;
    else return mov;
  }, movements[0]);
  return maximumValue;
};

// console.log(calcMaximum(account1.movements));

///////////////////////////////////////
// The Magic of Chaining Methods
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

///////////////////////////////////////
// The Find Method
const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);'

// Finding a property in one object by it's name
const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// If we use the for of loop
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    // console.log(acc.owner);
    break;
  } else {
    // console.log("Can't find");
  }
}

///////////////////////////////////////
// some and every
// console.log(movements);
// EQUALITY
// console.log(movements.includes(-130));
// SOME: CONDITION
// console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);
// EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));
// Separate callback
const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

///////////////////////////////////////
// flat on bankist application
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatMap on bankist application
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

///////////////////////////////////////
// Sorting Arrays
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);
// Numbers
// console.log(movements);
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
// console.log(movements);
// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
// console.log(movements);

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];

// Using the array constructor
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

/***********************************************************************************/
// EMPTY ARRAYS WITH FILL METHOD
const x = new Array(7); // Whenever we only pass in one argument, then it creates a new empty argument with that length

// console.log(x); // Returns: [empty x 7] | an empty array with the length of 7

// We cannot use the map mathod with the array constructor
// console.log(x.map(() => 5));

// We can use fill method to put elements in the array
// fill(First The Element That We Want To Fill With, BEGIN PARAMETER, END PARAMETER)

// SPECIFYING ONLY THE ELEMENT
// x.fill(1);
// console.log(x); // Returns: [1, 1, 1, 1, 1, 1, 1]

// SPECIFYING THE BEGIN PARAMETER
// Here we specify that we want to start at the index 3 (a begin parameter)
// x.fill(1, 3); // The fill method is a bitter similar to the slice method, and so, besides this value that we want to fill the array with, we can also specify where we want to start to fill
// console.log(x); // Returns: [empty x 3, 1, 1, 1, 1]

// SPECIFYING THE END PARAMETER
// x.fill(1, 3, 5);
// console.log(x); // Returns: [empty x 3, 1, 1, empty x 2]

// USING THE FILL METHOD ON ARRAYS
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(23, 4, 6); // Vai do 4 ao 5
// Sempre podemos fazer o inicio - fim = tamanho total de elementos que serão incluidos
// 4 - 6 = 2 === 2 elementos de 23
// console.log(arr); // Returns: [1, 2, 3, 4, 23, 23, 7]

/***********************************************************************************/
// ARRAY FROM METHOD (Array.from()) IT IS BETTER THEN THE ONE METHOD ABOVE TO RECREATE ARRAYS
// First we pass in an object with the length property
// The second argument is a mapping function (it is exactly like  the callback function that we pass into the map method)

// Programmatically recreating the array of seven 1's
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y); // Returns: [1, 1, 1, 1, 1, 1, 1]

// We can also, like in the map method, get access to the current element, and the index, in the arguments
// const z = Array.from({ length: 7 }, (cur, i) => i + 1);

// Podemos omitir um parametro com "_" underline/underscore, que significa uma "throwaway variable"
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); // Returns: [1, 2, 3, 4, 5, 6, 7];

// Dice roll Challenge
const diceRoll = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
// console.log(diceRoll);

/////////////////////////////////////////////////////////////////////////////
/*                     Arrays Method Practice                  */

// 1. Calculate how much has been deposited in total in the bank. So in all the accounts across the bank

// const bankDepositSum = accounts.map(acc => acc.movements).flat();
// console.log(bankDepositSum);

// We can simplify this with FlatMap
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);
// console.log(bankDepositSum);

// 2. Count how many deposits there have been in the bank with at least $1,000
// First way of solving
// const numDepoist1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDepoist1000);

// Second way of solving (Advanced way)
const numDepoist1000ADV = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // Here our snowball(accumulator) will be the number of movements that are greater than a thousand
// If the current element is greater than one thousand, we sum the count plus one and return it, otherwise, we just return the count

// console.log(numDepoist1000ADV);

// Prefixed ++ oeprator
// (cur >= 1000 ? count++ : count), 0)  We could use like this, but it wont work because the increment value first return the value, and after the incremented value, to resolve this, we can use the Prefixed ++ operator
let a = 10;
// console.log(++a);
// console.log(a);

// 3. Create a new object instead of just a number or just a string (USING OBJECTS AS THE ACCUMULATOR OF THE REDUCE METHOD)
// const sums = accounts
const { deposits1, withdrawals1 } = accounts // We can also destructure it
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // First Way of doing
      // cur > 0 ? (sums.deposits1 += cur) : (sums.withdrawals1 += cur);
      //  Second Way
      sums[cur > 0 ? 'deposits1' : 'withdrawals1'] += cur;
      return sums;
    },
    { deposits1: 0, withdrawals1: 0 }
  );
// console.log(deposits1, withdrawals1);

// 4. Create a simple function to convert any string to a tittle case (All the wordsin a sentence are capitalized except for some of them)
const convertTitleCase = function (title) {
  // Create a generic capitalizer function
  const capitalizer = str => str[0].toUpperCase() + str.slice(1);
  // Create an array that contain the exceptions [It's a Common Pattern to create arrays with exceptions]
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  // Create the tittle converter
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalizer(word)))
    .join(' ');
  // Se exceptions inclui [word] apenas retornamos essa word, mas se não, retornaremos a versão formatada
  return capitalizer(titleCase);
};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/*                     Coding Challenges                   */

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaRightData = juliaData.slice();
  juliaRightData.splice(0, 1);
  juliaRightData.splice(-2);
  const dogs = juliaRightData.concat(dogsKate);

  dogs.forEach(function (age, dog) {
    const dogsAge =
      age >= 3
        ? `Dog number ${dog + 1} is an adult and is ${age} years old`
        : `Dog number ${dog + 1} is still a poppy`;
    console.log(dogsAge);
  });
};

// checkDogs(juliaData, kateData);

/////////////////////////////////////////////////

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(humanAge => humanAge >= 18);
  const avarageAge = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return avarageAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1);
// console.log(avg2);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAges;
};

const avgChain1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avgChain2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// console.log(avgChain1);
// console.log(avgChain2);

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/
// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// Primeiro devemos filtrar
// Segundo devemos criar a nova array contendo todos os donos de cachorros que comem muito
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// Whenever we see the word any we can think about the some method
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const checkEatingOk = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOk)); // Here the checkEatingOk turn to be a callback function

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOk));

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood); // We can access the objects property throught the parameters on sort method
console.log(dogsSorted);
