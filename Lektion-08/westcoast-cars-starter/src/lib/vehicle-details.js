import { vehicles } from '../data/vehicles.js';

const initApp = () => {
  const vehicleId = location.search.split('=')[1];
  loadVehicle(vehicleId);
};

const loadVehicle = (vehicleId) => {
  const vehicle = vehicles.find((v) => v.id === +vehicleId);
};

document.addEventListener('DOMContentLoaded', initApp);
