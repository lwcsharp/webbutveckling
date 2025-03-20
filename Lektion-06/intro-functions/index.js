/*********************************************/
// Funktioner i JavaScript...
/********************************************/

/* 
    Funktioner/metoder är ett sätt att gruppera logik/kod
    som vi kan återanvända vid behov någon annanstans...

    Vi har 3 olika sätt att skapa funktioner i JavaScript!
    1.  Function Declarations
    2.  Function Expressions
    3.  Arrow Functions
*/

// FUNCTION DECLARATIONS...
// Detta fungerar tack vare JavaScript Hoisting...
// writeToLog();

// Kallas även för namngiven funktion...
// Observera att detta är en funktion som INTE returnerar något
function writeToLog() {
  console.log('Detta är ett meddelande ifrån funktionen writeToLog');
}

writeToLog();

function writeToLogWithArguments(message) {
  console.log(`Här kommer meddelandet: ${message}`);
}

writeToLogWithArguments('Hej på Er!');

// Skapa en funktion som returnerar något...
function sayHello(name) {
  return `Hej på dig ${name}`;
}

// När en funktion returnerar ett värde
// behöver vi fånga upp det resultatet i en variabel...
const result1 = sayHello('Erik');
console.log(result1);
const result2 = sayHello('Eva');
console.log(result2);
const result3 = sayHello('Olle');
console.log(result3);
const result4 = sayHello('Elisabeth');
console.log(result4);

/* FUNCTION EXPRESSIONS */
// Kallas oftast för anonyma funktioner...

// Detta fungerar inte!!!
// En anonym funktion(Function Expression) blir inte hoistad!!!
// const newMovie = addMovie('The Batman');
// console.log(newMovie);

const addMovie = function (title) {
  return `Sparar filmen ${title} till databasen`;
};
console.log(addMovie);
const result = addMovie('The Bucket List');
console.log(result);

/* ARROW FUNCTIONS... */
// Vi fick detta i och med ES6...
// Om vi har ett argument behövs inte paranteser...
// Om vi inte har har några argument MÅSTE vi ha paranteser...
// Om vi har fler argument än ett MÅSTE vi har paranteser...
const removeMovie = (title) => {
  return `Tar bort filmen ${title} från databasen`;
};
// const removeMovie = (title) =>  console.log(`Tar bort filmen ${title} från databasen`);
console.log(removeMovie);
console.log(removeMovie('The Bucket List'));
