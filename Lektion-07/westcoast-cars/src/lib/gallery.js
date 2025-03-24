// namngiven import...
import { vehicles } from '../data/vehicles.js';

const vehicleList = document.querySelector('#vehicles');

const initApp = () => {
  loadVehicles();
};

const loadVehicles = () => {
  console.log('Hämtar bilar');
  for (let vehicle of vehicles) {
    generateVehicleHtml(vehicle);
    // quickAndDirty(vehicle); //Använd EJ för detta ändamål...
  }
  // Då är bilderna på plats...
  const images = document.querySelectorAll('img');
  console.log(images);
  images.forEach((image) => {
    image.addEventListener('click', () => {
      console.log(`Du klickade på ${image.getAttribute('vehicleId')}`);
      location.href =
        '../pages/vehicle-details.html?vehicle=' +
        image.getAttribute('vehicleId');
    });
  });
};

// function generateVehicleHtml(vehicle) { }

/* 
<section class="card">
  <img src="../assets/images/car3.jpg" alt="" />
</section>
*/
const generateVehicleHtml = (vehicle) => {
  const section = document.createElement('section');
  section.classList.add('card');

  // Skapa bilden...
  const image = document.createElement('img');
  image.setAttribute('src', `../assets/images/${vehicle.imageUrl}`);
  image.alt = vehicle.manufacturer;
  image.setAttribute('vehicleId', vehicle.id);

  section.appendChild(image);

  // const manufacturerName = document.createTextNode(vehicle.manufacturer);

  // section.appendChild(manufacturerName);
  const info = document.createElement('p');
  info.innerText = vehicle.manufacturer;

  // info.style.textAlign = 'center';
  // info.style.position = 'relative';
  // info.style.top = '-50px';
  // info.style.background = '#333';
  // info.style.maxWidth = '80%';
  // info.style.margin = 'auto';
  // info.style.padding = '0.3rem 0';
  // info.style.margin = '0.8rem';
  // info.style.marginTop = '0px';
  // info.style.marginTop = '-40px';

  section.appendChild(info);

  vehicleList.appendChild(section);
};

let html = '';
const quickAndDirty = (vehicle) => {
  html += `
  <section class="card">
    <img src="../assets/images/${vehicle.imageUrl}" alt="" />
  </section>
  `;
  vehicleList.innerHTML = html;

  console.log(html);
};

document.addEventListener('DOMContentLoaded', initApp);
