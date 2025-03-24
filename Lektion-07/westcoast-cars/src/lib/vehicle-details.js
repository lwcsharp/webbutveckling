import { vehicles } from '../data/vehicles.js';

const initApp = () => {
  console.log(location.search);
  const vehicleId = location.search.split('=')[1];
  console.log(location.search.split('='));
  console.log(vehicleId, typeof vehicleId);
  loadVehicle(vehicleId);
};

const loadVehicle = (vehicleId) => {
  // Hur hittar vi en bil med inskickat id?
  // const vehicle = vehicles.find((v) => v.id === +vehicleId);
  const vehicle = vehicles.find((v) => v.id === parseInt(vehicleId));
  console.log(vehicle);
};

document.addEventListener('DOMContentLoaded', initApp);
