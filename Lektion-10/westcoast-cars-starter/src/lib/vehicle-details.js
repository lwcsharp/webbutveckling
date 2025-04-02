import { get, remove } from './utilities/httpClient.js';

// Skapar referenser till html element i dokumentet...
const pageTitle = document.querySelector('.page-title');
const vehicleImage = document.querySelector('.details img');
const modelYear = document.querySelector('.info p:first-child');
const mileage = document.querySelector('.info p:nth-child(2)');
const price = document.querySelector('.info p:nth-child(3)');
const description = document.querySelector('.info p:last-child');
const deleteButton = document.querySelector('#deleteVehicle');

// Global modul variabel
let vehicleId;

const initApp = () => {
  vehicleId = location.search.split('=')[1];
  loadVehicle(vehicleId);
};

const loadVehicle = async (vehicleId) => {
  try {
    const vehicle = await get(`vehicles/${vehicleId}`);
    // const vehicle = await get(`vehicles?id=${vehicleId}`);

    setPageTitle(vehicle.manufacturer + ' ' + vehicle.model);
    setImage(vehicle.imageUrl);
    generateInfo(vehicle);
  } catch (error) {
    console.log('Error information:', error);
  }
};

const handleDeleteVehicle = async (e) => {
  e.preventDefault();

  const returnUrl = `${location.origin}/src/pages/gallery.html`;
  const result = await remove(`vehicles/${vehicleId}`);

  if (result === 200) {
    // Vill jag flytta mig till galleriet...
    location.href = returnUrl;
  }
};

const setPageTitle = (title) => {
  pageTitle.innerText = title;
};

const setImage = (imageUrl) => {
  vehicleImage.src = `../assets/images/${imageUrl}`;
};

const generateInfo = (vehicle) => {
  modelYear.innerHTML += ` <span>${vehicle?.modelYear}</span>`;
  mileage.innerHTML += ` <span>${vehicle?.mileage}</span>`;
  price.innerHTML += ` <span>${vehicle?.value}</span>`;
  description.innerHTML += `<br/><span>${vehicle?.description}</span>`;
  description.style.textAlign = 'justify';
};

document.addEventListener('DOMContentLoaded', initApp);
deleteButton.addEventListener('click', handleDeleteVehicle);
