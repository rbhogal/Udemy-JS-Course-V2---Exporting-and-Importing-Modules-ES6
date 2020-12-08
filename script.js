// Importing module

// 1. Named imports
// import { addToCart, totalPrice as price, tq} from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing modules');
// console.loc(shippingCost);

// 2. Import everything
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// 3. DON'T MIX NAMED AND DEFAULT EXPORTS 
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// 4. Import default export and name it whatever without curly brackets also don't mix like in here
import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 4);

console.log(cart);