/* 
  KONVERTERING AV VÄRDEN I JAVASCRIPT...
*/

/* 
  JavaScript hanterar konverting av värden på två sätt.
  1.  Type Conversion = Vi manuellt omvandlar talar vilken typ vi behöver konverterar till.
  2.  Type Coersion = JavaScript försöker förstå vad vi vill åstadkomma och automatisk försöker
      omvandla ett värde till en annan typ...
*/

// 1. TYPE CONVERSION...
const mileage = '125000';

console.log(mileage);
console.log(typeof mileage, mileage);

console.log(mileage + 1000);
console.log(typeof mileage, mileage + 1000);

// Manuellt konvertera mileage till numeriskt...
console.log(Number(mileage) + 1000);
console.log(parseInt(mileage) + 20000);

// Manuellt konvertera ett numeriskt värde till sträng...
console.log(String(75));

console.log(Number('Fiat'));
console.log(typeof NaN);
console.log(Number('24.5'));

// 2. TYPE COERSION...
const test = 3500;
console.log(typeof test, test);

console.log('Min bil har gått ' + test + ' mil');
// console.log('Min bil har gått ' + '3500' + ' mil')
console.log(test + ' har min bil gått');
console.log('Min bil har gått ' + String(test) + ' mil');

console.log('20' + '10');
console.log('20' + '10' - 5);
console.log('20' + '10' + 5);

console.log(Number('20') + '10' - 5);

console.log('10' * '2');
console.log('10' / '2');
console.log('Fiat' / '2');
