// Jämförelser
// 1. loose comparison (==)
// 2. strict comparison(===)

// ANVÄND ALLTID STRICT COMPARISON
// FÖR ATT UNDVIKA MÄRKLIGA BUGGAR SOM
// KAN UPPSTÅ...

const number = '10';
console.log('number', typeof number);

// loose comparison
if (number == 10) {
  console.log(`Number är ${number} (loose)`);
}

// strict comparison
if (number === '10') {
  console.log(`Number är ${number} (strict)`);
}

// const inputNumber = prompt('Ange ett nummer');
// console.log(typeof inputNumber, inputNumber);

// if (inputNumber == 55) {
//   console.log('Du angav värdet ', inputNumber);
// }
