// BLOCKING CODE
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

//////// NAMED EXPORTS /////////

// Exporting module
console.log(`Exporting module`);

//// EXPORTS ALWAYS HAVE TO HAPPEN IN TOP LEVEL CODE //////

// Variables that are declared inside of a  module, are scooped to this module
// Inside of a module, the module itself is like the top level scope.
// This means that all  top level variables are private inside of this variable.
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

// exporting all at the same time

const totalPrice = 237;
const totalQuantity = 23;

// We can export and change the name when exporting: oldName "as" newName
export { totalPrice, totalQuantity as quantity };

////////// DEFAULT EXPORTING /////////
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
