import { get } from './utilities/httpClient.js';

const vehicleList = document.querySelector('#vehicles');

const initApp = () => {
  loadVehicles();
};

const loadVehicles = async () => {
  try {
    const vehicles = await get('vehicles');
    console.log(vehicles);
    for (let vehicle of vehicles) {
      generateVehicleHtml(vehicle);
    }
  } catch (error) {
    console.error('Error Information', error);
  }

  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.addEventListener('click', () => {
      console.log(`Du klickade på ${image.getAttribute('vehicleId')}`);
      location.href =
        '../pages/vehicle-details.html?vehicle=' +
        image.getAttribute('vehicleId');
    });
  });
};

const generateVehicleHtml = (vehicle) => {
  const section = document.createElement('section');
  section.classList.add('card');

  // Skapa bilden...
  const image = document.createElement('img');
  image.setAttribute('src', `../assets/images/${vehicle.imageUrl}`);
  image.alt = vehicle.manufacturer;
  image.setAttribute('vehicleId', vehicle.id);

  section.appendChild(image);

  const info = document.createElement('p');
  info.innerText = vehicle.manufacturer;

  section.appendChild(info);

  vehicleList.appendChild(section);
};

document.addEventListener('DOMContentLoaded', initApp);
