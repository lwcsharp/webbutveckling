import { vehicles } from '../data/vehicles.js';

// Skapar referenser till html element i dokumentet...
const pageTitle = document.querySelector('.page-title');
const vehicleImage = document.querySelector('.details img');
const modelYear = document.querySelector('.info p:first-child');
const mileage = document.querySelector('.info p:nth-child(2)');
const price = document.querySelector('.info p:nth-child(3)');
const description = document.querySelector('.info p:last-child');
// const description = document.querySelector('.info p:nth-child(4)');

const initApp = () => {
  const vehicleId = location.search.split('=')[1];
  loadVehicle(vehicleId);
};

const loadVehicle = (vehicleId) => {
  const vehicle = vehicles.find((v) => v.id === +vehicleId);
  if (vehicle) {
    setPageTitle(vehicle.manufacturer + ' ' + vehicle.model);
    setImage(vehicle.imageUrl);
    generateInfo(vehicle);
  }
};

const setPageTitle = (title) => {
  pageTitle.innerText = title;
};

const setImage = (imageUrl) => {
  vehicleImage.src = `../assets/images/${imageUrl}`;
};

const generateInfo = (vehicle) => {
  modelYear.innerHTML += ` <span>${vehicle.modelYear}</span>`;
  mileage.innerHTML += ` <span>${vehicle.mileage}</span>`;
  price.innerHTML += ` <span>${vehicle.value}</span>`;
  description.innerHTML += `<br/><span>${vehicle.description}</span>`;
  description.style.textAlign = 'justify';
};

document.addEventListener('DOMContentLoaded', initApp);
