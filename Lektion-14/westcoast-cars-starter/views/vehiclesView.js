import View from "./View.js"

class VehiclesView extends View{
  constructor(){
    super(document.querySelector('#gallery'));
  }

  _generateImageEvent(){
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('click', () =>{
        location.href =
         './vehicle-details.html?vehicle' + image.getAttribute('vehicleId');
      });
    });
  }

  _generateHtml() {
    const vehicleList = document.createElement('article');
    vehicleList.classList.add("gallery");

    for (let vehicle of this._data) {
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
    return vehicleList;
  }
}

export default new VehiclesView();