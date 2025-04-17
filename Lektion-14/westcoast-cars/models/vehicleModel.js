import http from '../scripts/httpClient.js';

// State hantering, sparar/lagrar informationen som
// resten av applikation behöver...
export const state = {
  vehicles: [],
  vehicle: {},
};

// Affärslogiken...
// 1. Hämta alla bilar någonstans ifrån...
export const listVehicles = async () => {
  try {
    // Nu använder vi http för att hämta våra bilar..
    const client = new http('vehicles');
    const result = await client.get();

    state.vehicles = result.map((vehicle) => {
      return { ...vehicle };
    });
  } catch (error) {
    throw error;
  }
};

// 2. Hämta en bil någonstans ifrån...
export const findVehicle = async (id) => {
  try {
    const client = new http(`vehicles/${id}`);
    state.vehicle = await client.get();
  } catch (error) {
    throw error;
  }
};
