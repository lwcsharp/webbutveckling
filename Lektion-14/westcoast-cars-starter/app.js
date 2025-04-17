// import { get } from './scripts/httpClient.js';
import http from './scripts/httpClient.js';

const vehicleList = document.querySelector('#vehicles');
const pageTitle = document.querySelector('.page-title');
const vehicleImage = document.querySelector('.details img');
const modelYear = document.querySelector('.info p:first-child');
const mileage = document.querySelector('.info p:nth-child(2)');
const price = document.querySelector('.info p:nth-child(3)');
const description = document.querySelector('.info p:last-child');

const initApp = () => {
  if (location.href.endsWith('gallery.html')) {
    loadVehicles();
  } else if (location.href.includes('vehicle-details.html')) {
    const vehicleId = location.search.split('=')[1];
    loadVehicle(vehicleId);
  }
};

const loadVehicles = async () => {
  const client = new http('vehicles');
  const vehicles = await client.get();

  console.log(vehicles);

  for (let vehicle of vehicles) {
    const section = document.createElement('section');
    section.classList.add('card');

    const image = document.createElement('img');
    image.setAttribute('src', `./images/${vehicle.imageUrl}`);
    image.alt = vehicle.manufacturer;
    image.setAttribute('vehicleId', vehicle.id);

    section.appendChild(image);

    const info = document.createElement('p');
    info.innerText = vehicle.manufacturer;

    section.appendChild(info);

    vehicleList.appendChild(section);
  }

  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.addEventListener('click', () => {
      console.log(`Du klickade på ${image.getAttribute('vehicleId')}`);
      location.href =
        './vehicle-details.html?vehicle=' + image.getAttribute('vehicleId');
    });
  });
};

const loadVehicle = async (vehicleId) => {
  const client = new http(`vehicles/${vehicleId}`);
  const vehicle = await client.get();

  if (vehicle) {
    pageTitle.innerText = vehicle.manufacturer + ' ' + vehicle.model;
    vehicleImage.src = `./images/${vehicle.imageUrl}`;
    modelYear.innerHTML += ` <span>${vehicle.modelYear}</span>`;
    mileage.innerHTML += ` <span>${vehicle.mileage}</span>`;
    price.innerHTML += ` <span>${vehicle.value}</span>`;
    description.innerHTML += `<br/><span>${vehicle.description}</span>`;
    description.style.textAlign = 'justify';
  }
};

document.addEventListener('DOMContentLoaded', initApp);
