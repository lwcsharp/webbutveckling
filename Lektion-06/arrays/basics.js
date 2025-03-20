/*************************************************/
// Array => listor, collections...
// Lagring av data sekventiellt 1,2,3,4,5,6
// Varje datamängd i en array kallas för element...
/*************************************************/

// 1. Enklast möjliga sätt...
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

// 2. Manuellt skapar en array, används väldigt sällan!
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(numbers2);

// 3. Skapar en tom array...
const numbers3 = [];
console.log(numbers3);

/**********************************************************/
// Manipulera en array...
// Ta reda på hur många element som finns i vår array...
console.log(numbers.length);

// Plocka ett element ur en array...
// Görs index positionering...
// Använder indexer i vår array...
const firstElement = numbers[0];
console.log(firstElement);
console.log(numbers[1]);

// Hämta ut sista elementet...
// Det långa sättet(krångliga sättet)...
const lastElement = numbers[numbers.length - 1];
console.log(lastElement);

const lastElement2 = numbers.at(-1);
console.log(lastElement2);

// Lägga till ett element i en array, så använder vi
// metoden push...
// push lägger alltid till ett nytt element sist...
numbers3.push(10);
numbers3.push(20);
numbers3.push(5);

console.log(numbers3);

// Arbeta med strängar...
const strings = ['Oskar', 'Linnea', 'Matilda', 'Marcus'];
console.log(strings);

strings.push('Emma');
console.log(strings);

// Arbeta med objekt...
const vehicles = [
  {
    manufacturer: 'BMW',
    model: 'X3e',
  },
  {
    manufacturer: 'Mercedes',
    model: '500S',
  },
];

console.log(vehicles);

console.log(vehicles.at(-1));

/***********************************************************/
//  Grundläggande metoder för att manipulera en array...
/***********************************************************/

const movies = ['The Batman', 'Titanic', 'John Wick'];
console.log(movies);

// 1. Lägga till något i en array..
// Lägga till sist...
movies.push('The Tomorrow War');
console.log(movies);

// 2. Lägg till något först i en array...
movies.unshift('Wakanda Forever');
console.log(movies);

// Ta bort ett element ifrån en array...
// 3. Ta bort sista elementet...
movies.pop();
console.log(movies);

// 4. Ta bort första elementet...
movies.shift();
console.log(movies);

// 5. Ändra ordningen på en array...
movies.reverse();
console.log(movies);

// 6. Kontrollerar om ett element finns i en array...
// funktionen returnerar endast true eller false!!!
const exists = movies.includes('Avatar');
console.log('Filmen finns', exists);

// 7. Ta reda på ett elements index(position) i en array...
const index = movies.indexOf('The Batman');
console.log(index);
console.log(movies[index]);

// 8. Skapa en ny array med endast utvalda element ur grund arrayen..
movies.push('The Tomorrow War');
movies.push('Wakanda Forever');
console.log(movies);

let list = movies.slice(3);
console.log('LIST', list);
console.log('MOVIES', movies);

list = movies.slice(1, 2);
console.log('LIST', list);
console.log('MOVIES', movies);

// 9. Ta bort element ifrån en valfri position...
console.log('MOVIES', movies);

const removedMovies = movies.splice(1, 1);
console.log('DELETED', removedMovies);
console.log('MOVIES', movies);

/**********************************************************/
//  Kombinera ovanstående metoder genom att nästla/chain
//  metoderna efter varandra...
/**********************************************************/

// 10.  Hämta ut ett element och ändra odrningen på presentationen...
list = movies.splice(1, 2).reverse();
// list = movies.splice(1, 2).reverse().toString();
// list = movies.splice(1, 2).reverse().toString().toLowerCase();
console.log(list);

// 11.  Slå samman två arrayer till en...
let allMovies = movies.concat(list);
console.log(allMovies);

// 12.  Skapa en sträng av en array med valfri separator...
const separatedList = allMovies.join(', ');
console.log(separatedList);
console.log(allMovies);

// 13.  Sortera en array...
console.log(allMovies.sort());
const testArray = [3, 6, 9, 1, 7, 2, 8];
console.log(testArray);
console.log(testArray.sort());
