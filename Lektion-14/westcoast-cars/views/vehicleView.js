import View from './View.js';

class VehicleView extends View {
  constructor() {
    super(document.querySelector('main div.container'));
  }

  // Override render metoden...
  render(data) {
    this._data = data;
    this._clearHtml();
    const html = this._generateHtml();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _generateHtml() {
    return `<h1 class="page-title">${this._data.manufacturer} ${this._data.model}</h1>
    <article class="details">
      <section>
        <img src="../../assets/images/${this._data.imageUrl}"/>
        <div>
          <p>Årsmodell: <span>${this._data.modelYear}</span></p>
          <p>Antal körda km: <span>${this._data.mileage}</span></p>
          <p>Pris: <span>${this._data.value}</span></p>
          <p>Beskrivning: <br/><span>${this._data.description}</span></p>
        </div>
      </section>
    </article>`;
  }
}

export default new VehicleView();
