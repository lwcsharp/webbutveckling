// Skriva till webbläsarens konsol fönster...
/* console.log('Här kommer ett meddelande...');
console.warn('Här kommer din sista varning!');
console.error('Här kommer ett fel!!!'); */

// Deklarera variabler i JavaScript...
// ANVÄND ALDRIG var FÖR DEKLARATION!!!
// var firstName = 'Nils';

// Från och med ES6...
let firstName = 'Michael';
console.log(firstName);

let lastName;
console.log('LastName', lastName);

firstName = 'Viktor';
console.log(firstName);

const address = 'Gatan 1';
console.log(address);

// Går ej att göra!!!
/* address = 'Vägen 8';
console.log(address); */

/* 
  Vi har i JavaScript 3 olika sätt att deklarera variabler på
  1.  var = deklarerar en variabel i det globala namnutrymmet i Windows objektet
      ANVÄND ALDRIG!!!

  2.  let = deklarerar en variabel med en livslängd(scope) baserat
      på var den deklareras. Värdet går att ändra(mutable)...

  3.  const = deklarerar en variabel med en livslängd(scope) baserat
      på var den deklareras. Värdet går inte att ändra(immutable).
      En const variabel måste initieras(sätta ett värde vid deklarationen)

  VAD SKA JAG ANVÄNDA???
  Börja ALLTID med const, senare kan vi göra om den till let om vi
  behöver ändra värdet(manipulera)...
*/

let age = 45;
console.log(age);
console.log('age', typeof age);

const isActive = true;
console.log('isActive', typeof isActive);

console.log('firstName', typeof firstName);

const price = 12.95;
console.log('price', typeof price);

// Skapat ett objekt...
const vehicle = { model: 'XC40', modelYear: 2023 };
console.log(vehicle);
console.log('vehicle', typeof vehicle);

// En berömd JavaScript bugg...😄
const volvo = null;
console.log('volvo', volvo);
console.log('volvo', typeof volvo);
