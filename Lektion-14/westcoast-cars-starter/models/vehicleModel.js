import http from "../scripts/httpClient.js";

//state hantering, sparar/lagrar info som restan av appen behöver
export const state = {
  vehicles: [],
  vehicle:{}
};

//affärslogiken
//2. hämta alla bilar ngnstans ifrån...
export const listVehicles = async () => {
  try {
    //använder http för att hämta bilarna....
    const client = new http('vehicles')
    const result = await client.get();

    state.vehicles = result.map(vehicle => {
      return {...vehicle}; //spread-operator, kopierar varje state in i vehicle
    })
  } catch (error) {
    throw error;
    
  }
}

//2. hämta en bil ngnstans ifrån...
export const findVehicle = async(id)=> {
  try {
    const client = new http(`vehhicle/${id}`);
    const result = await client.get();
    state.vehicle = result;
  } catch (error) {
    throw error;
  }
};