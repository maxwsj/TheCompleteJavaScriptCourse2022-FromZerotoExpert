//////// NAMED IMPORTS /////////

// Importing module
// import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);

// // To change the name of an export we use: oldName "as" newName
// console.log(price, quantity);

////////////////////////////////////////////

// console.log('Importing module');

// Importing all the exports of a module at the same time
// import * as ShoppingCart from './shoppingCart.js'; // the starts means "everything"

// Whenever we want to use something from the module we need to take it from the ShoppingCart object
// ShoppingCart.addToCart('bread', 5);

// console.log(ShoppingCart.totalPrice);

////////// DEFAULT IMPORTING /////////
// Usually we just use one deafult export per module.
import add from './shoppingCart.js'; // We can give any name that we want
add('pizza', 2);

////// MIXING DEFAULT AND NAMED EXPORTS /////
// In practice we never mix them
// import add, {
//   addToCart,
//   totalPrice as price,
//   quantity,
// } from './shoppingCart.js'; // We can give any name that we want
// add('pizza', 2);
// console.log(price);

/////////// USING TOP LEVEL AWAIT /////////
// console.log('Start fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);
// console.log(`Something`);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// // Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost(); // Insirimos um await para esperar a resposta do resultado do getLastPost();
// console.log(lastPost2);

////////// The Module Pattern ///////

// IIFIE - Create a new scope and return data just once
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${product} ${quantity} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${product} ${quantity} ordered from suplier`);
//   };

//   // Return a object which contains the stuff that we want to make public here
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 4);
// console.log(ShoppingCart2);

////////// CommonJS Modules //////////

// One file is one module

// Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${product} ${quantity} added to cart`);
// };

// Import
// const { addToCart } = require('./shoppingCart.js')

////// Introduction to NPM //////
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', qt: 5 },
    { product: 'pizza', qt: 5 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
stateDeepClone.user.loggedIn = false;
console.log(stateDeepClone);
console.log(state);

if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable';
