import * as controller from '../../controllers/vehiclesController.js';

const initApp = async () => {
  await controller.createGallery();
};

document.addEventListener('DOMContentLoaded', initApp);
