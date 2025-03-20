/************************************************/
// Egen sorteringsalgoritm (Customer sort)
/************************************************/

const transactions = [3000, -250, 200, -50, 450, 2000, 1000];
console.log(transactions);
console.log(transactions.sort());

/* 
  Vi kan skapa våra egna sorteringsalgoritmer(comparer)...
  åsidosätter vi den inbyggda algoritmen

  sort funktionen tar alltid två argument (a respektive b)

  om funktionens värde < 0 så kommer a att komma före b
  om funktionens värde > 0 så kommer b att komma före a
*/

// Sortera våra transaktioner i stigande ordning(ascending)...
// Det omoderna sättet😆
// transactions.sort(function (a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// Det moderna sättet...(Arrow function)
transactions.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(transactions);

// Sortera i fallande ordning (descending)...
transactions.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});

console.log(transactions);

// Stigande ordning...
transactions.sort((a, b) => a - b);
console.log(transactions);

// Fallande ordning...
transactions.sort((a, b) => b - a);
console.log(transactions);
