/* 
  OPERATORS
  +,-,*,/,%,<,>,>=,=<,!
*/

const firstName = 'Michael';
const lastName = 'Gustavsson';
const address = 'Gatan 24';
const postalCode = '123 45';
const city = 'Stora Staden';

// IS VERY BAD!!!!
const info =
  firstName + ' ' + lastName + ' ' + address + ' ' + postalCode + ' ' + city;

console.log(info);

// THE RIGHT WAY OR AT LEAST A BETTER WAY...
// Template string (interpolation)...
const personInfo = `Mitt namn är ${firstName} ${lastName} och min adress är ${address} ${postalCode} ${city}`;
console.log(personInfo);

/* Matematiska operationer */
let x = 10 * 2 + 5;
console.log(x);

x = (10 * 2) / 5;
console.log(x);

x = 10 * (2 + 5);
console.log(x);

let y = 3 * 3 * 3 * 3;
console.log(y);
y = 3 ** 4;
console.log(y);

// modulus %...
let z = 25;
console.log(25 / 5);
console.log(25 % 5);
console.log(25 / 3);
console.log(25 % 3);
console.log(25 / 2);
console.log(25 % 2);

// Förenkling av operatorer...
let age = 30;
console.log('age', age);

age = age + 1;
console.log('age', age);

age += 1;
console.log('age', age);

age -= 1;
console.log('age', age);

console.log('age', age++);
console.log('age', ++age);
console.log('age', age--);
console.log('age', --age);

console.log('age', age);

// console.log('age', (age = age * 2));
console.log('age', (age *= 2));
// console.log('age', (age = age / 2));
console.log('age', (age /= 2));
