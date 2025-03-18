// Ett objekt är ett sätt att kapsla information/data
// som hör ihop en en grupp av egenskaper och värde...

/* 
  Fokusera på anonyma objekt... 
  dvs skapar objekt när vi behöver dem, on-the-fly...
  DYNAMISKA OBJEKT...
*/

// 1.
const vehicle = new Object();

vehicle.id = 1;
vehicle.manufacturer = 'Volvo';
vehicle.model = 'V90';

console.log('Vehicle', vehicle);

vehicle.color = 'Blue metallic';

// 2. Ett mer modernt sätt och framförallt snyggare och enklare...
const car = {
  id: 2,
  manufacturer: 'Ford',
  model: 'MACH-E',
};

console.log('Car', car);

car.color = 'Black';
car.mileage = 5000;
car.modelYear = 2023;

vehicle.regNo = 'ABC123';

console.log(car.manufacturer, car.model);
// Indexering till egenskaper/keys i objekt
console.log(car['manufacturer'], car['model']);

car.model = 'Mustang';
car['modelYear'] = 2011;
console.log(car);

delete car.color;
console.log(car.color);
