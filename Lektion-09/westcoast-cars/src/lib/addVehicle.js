import { post } from './utilities/httpClient.js';

const form = document.querySelector('#addVehicleForm');

const handleAddVehicle = async (e) => {
  e.preventDefault();

  // Skapar ett formData objekt ifrån formulärets inmatningsfält...
  const vehicleData = new FormData(e.target);
  const vehicleInfo = Object.fromEntries(vehicleData.entries());
  const result = await post('vehicles', vehicleInfo);
  console.log('Resultat:', result);
};

// Koppla formuläret till en händelse...
form.addEventListener('submit', handleAddVehicle);
