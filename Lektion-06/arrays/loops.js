/**********************************************************/
// Iterationer med JavaScript...
// Loopar med JavaScript...
// I JavaScript har vi flera olika alternativa sätt
// att gå igenom en array
// 1. for loopen
// 2. for of loopen
// 3. forEach loopen
/**********************************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop...
console.log('----- for loopen -----');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i], `i=${i}`);
}

// for of loop...
console.log('----- for of loopen -----');
for (let number of numbers) {
  console.log(number);
}

// forEach loopen...
// En "High Order Method"...
// Alla High Order Methods förväntar en funktion som argument...
// Varianter...
// Variant 1.
console.log('----- forEach loopen variant 1');
// funktionen som ska utföra arbetet i forEach
// behöver en variabel som representerar varje
// element i vår array
numbers.forEach(function (number) {
  console.log(number);
});

// Variant 2.
console.log('----- forEach loopen variant 2');
// Arrow function...
numbers.forEach((number) => {
  console.log(number);
});

numbers.forEach((number) => console.log(number));
