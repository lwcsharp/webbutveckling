import * as model from '../models/vehicleModel.js';
import vehiclesView from '../views/vehiclesView.js';
import vehicleView from '../views/vehicleView.js';

export const createGallery = async () => {
  await model.listVehicles();
  vehiclesView.render(model.state.vehicles);
};

export const createDetailsPage = async (id) => {
  await model.findVehicle(id);
  vehicleView.render(model.state.vehicle);
};
