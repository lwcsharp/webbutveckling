import { vehicles } from '../data/vehicles.js';

const initApp = () => {
  console.log(location.search);
  const vehicleId = location.search.split('=')[1];
  console.log(vehicleId);
};

document.addEventListener('DOMContentLoaded', initApp);
