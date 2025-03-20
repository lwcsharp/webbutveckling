/********************************************/
//  Array.filter...
/********************************************/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter funktionen behöver ett predicate/villkor men
// uttryckt som en funktion...
// Hämta all jämna tal och placera dem i en ny array...
// 1. Det omoderna sättet...
const evenNumbers = [];
// numbers.forEach(function(){})
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(numbers);
console.log(evenNumbers);

// 2. Mer modernt sätt att göra ovanstående...
// const evenNumbersFiltered = numbers.filter((number) => {
//   return number % 2 === 0;
// });

const evenNumbersFiltered = numbers.filter((number) => number % 2 === 0);

console.log(numbers);
console.log(evenNumbersFiltered);

/************************************************************/
// Ett mer verklighetstroget exempel...
console.log(vehicles);

const mercedes = vehicles.filter((vehicle) => {
  return vehicle.manufacturer.toLowerCase() === 'mercedes';
});

console.log('Mercedes bilar i lager:', mercedes);

// Hämta ut alla bilar om de finns som inte är äldre än 10 år...
const interesting = vehicles.filter((vehicle) => vehicle.modelYear > 2015);
console.log(interesting);

// Hämta ut alla bilar om de finns som har gått maximalt 10000 mil...
const lowMileage = vehicles.filter((vehicle) => vehicle.mileage <= 100000);
console.log(lowMileage);

// Hämta ut alla bilar som uppfyller ovanstående krav...
const prospects = vehicles.filter(
  (vehicle) => vehicle.modelYear >= 2015 && vehicle.mileage <= 100000
);
console.log(prospects);

// const badWay = [];
// vehicles.forEach((vehicle) => {
//   if (vehicle.modelYear >= 2015 && vehicle.mileage <= 100000) {
//     badWay.push(vehicle);
//   }
// });
// console.log('BAD WAY:', badWay);
