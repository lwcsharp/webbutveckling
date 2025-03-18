/* Arbeta med strängar */
// Slå samman strängar...
const firstName = 'Michael';
const lastName = 'Gustavsson';
const address = 'Gatan 24';
const postalCode = '123 45';
const city = 'Stora Staden';

// concat metoden på en sträng...
console.log(
  'Min info',
  firstName.concat(' efternamn: ', lastName, ' address: ', address)
);

/* Egenskaper på strängar */
const vehicle = 'Volvo V40 2017';
// Length
console.log('Vehicles antal tecken', vehicle.length);

/* Metoder på strängar */
// Plocka tecken ur en sträng...
// En sträng kan hanteras som en lista(array) av tecken...
console.log(firstName[0]);
console.log(firstName[2]);
// console.log(firstName[6]);
// Det gamla sättet...
console.log(firstName[firstName.length - 1]);
const index = firstName.length - 1;
console.log(firstName[index]);

// Moderna JavaScript sättet att plocka tecken...
// metoden at()...
console.log(firstName.at(-1));
console.log(firstName.at(0));

// metoden charAt()...
console.log(firstName.charAt(0));
console.log(firstName.charAt(2));

// Hämta ut flera tecken ur en sträng...
// metoden slice()...
console.log(firstName, firstName.slice(2), firstName);
console.log(firstName, firstName.slice(2, 5));
console.log(firstName, firstName.slice(-4));
console.log(firstName, firstName.slice(-4, -2));

// En mycket trevligare metod att göra ovanstående
// metoden substring()...
console.log(firstName, firstName.substring(2), firstName);
console.log(firstName, firstName.substring(2, 5), firstName);
// Funkar inte ännu!!!
/*
console.log(firstName, firstName.substring(-2), firstName);
console.log(firstName, firstName.reverse());
*/

// Kontrollera om en sträng börja med ett tecken eller en teckensträng
console.log(firstName, firstName.startsWith('m'));
console.log(firstName, firstName.startsWith('M'));
console.log(firstName, firstName.startsWith('Mic'));

// Kontrollera om en sträng slutar med ett tecken eller en teckensträng...
console.log(firstName, firstName.endsWith('l'));
console.log(firstName, firstName.endsWith('ael'));

// Justera strängar till att vara stora eller små bokstäver...
console.log(firstName, firstName.toUpperCase());
console.log(firstName, firstName.toLowerCase());

// Chaining, addera metoder tillsammans...
console.log(firstName, firstName.toLowerCase().startsWith('m'));

// Städa bort tecken...
// Plocka bort alla mellanslag/whitespace
const s = ' Strandvägen 1 ';
console.log('X', s, 'X');
console.log('X', s.trim(), 'X');
console.log('X', s.trimStart(), 'X');
console.log('X', s.trimEnd(), 'X');

// Ersätta tecken...
console.log(vehicle);
console.log(vehicle.replaceAll(' ', ''));

const title = 'JavaScript är ett fantastiskt språk att utveckla i';
console.log(title, title.length);
console.log(title, title.replace('fantastiskt', 'otroligt fantastiskt'));
console.log(title, title.replace('fantastiskt', 'FANTASTISKT'));

// Reguljära uttryck
const regex = /JavaScript/i;
console.log(title.replace(regex, 'React'));

// Repetera ord eller tecken...
const test = 'snabb';
console.log(test, test.repeat(10));
