import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';

import { toUpperCase, toLowerCase } from './stringModule.js';

import { findMax, reverseArray } from './arrayModule.js';

console.log('Add:', add(4, 4));               
console.log('Subtract:', subtract(7, 6));  
console.log('Multiply (default):', multiply(4, 5)); 

console.log('Uppercase:', toUpperCase('hello'));
console.log('Lowercase:', toLowerCase('WORLD')); 

console.log('Max:', findMax([5, 6, 7, 8, 9]));     
console.log('Reversed:', reverseArray([1, 2, 3.4]));

addAndLogUpper(10, 20);

function maxMultiplyUpper(arr, factor) {
  const max = findMax(arr);
  const product = multiply(max, factor);
  const resultUpper = toUpperCase(String(product));
  console.log('[Final Challenge] Max:', max, '| Factor:', factor, '| Product (upper):', resultUpper);
  return resultUpper;
}

maxMultiplyUpper([3, 10, 8, 1, 7], 10);  