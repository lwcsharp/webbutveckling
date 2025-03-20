/**********************************************************/
//  Array.find()
/**********************************************************/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* 
  find tar ett argument predicate/villkor som funktion...
  Vi kan söka efter något i vår array, find returnerar
  elementet som den hittar. Om det finns...
*/
const found = numbers.find((number) => number === 2);
// const found = numbers.find((number) => {
//   return number === 4;
// });

console.log(found);

const actors = ['Bruce', 'Julia', 'Chris', 'Julia'];
const actor = actors.find((person) => person === 'Julia');
// const actor = actors.find((person) => person === 'Bruce');
console.log(actor);

/**********************************************************/
//  Sök bland bilarna i vehicles.js
/**********************************************************/
console.log(vehicles);
let car = vehicles.find(
  (vehicle) => vehicle.manufacturer.toLowerCase() === 'mercedes'
);

console.log('Hittade en bil: ', car);

car = vehicles.find((vehicle) => vehicle.model.toLowerCase() === 'alpine');
console.log(car);

car = vehicles.find(
  (vehicle) =>
    vehicle.manufacturer.toLowerCase() === 'mercedes' &&
    vehicle.model.toLowerCase() === 'amg'
);
console.log('Hittade AMG mercan!', car);

// Från och med här använder vi movies.js, dvs movies arrayen...
console.log(movies);

let movie = movies.find((movie) => movie.id === 678512);
console.log(movie);
movie = movies.find((movie) => movie.title.toLowerCase().startsWith('fast x'));
console.log(movie);
movie = movies.find((movie) =>
  movie.overview.toLowerCase().startsWith('jonas')
);
console.log(movie);
