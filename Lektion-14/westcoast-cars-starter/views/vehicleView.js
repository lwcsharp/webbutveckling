import View from "./View.js";

class VehiclesView extends View {
  constructor() {
    super(document.querySelector('main div.container'));
  }

// override render metoden...
render(data){
  this._data = data;
  this._clearHtml();
  const html = this._generateHtml();
  this._parentElement.insertAdjacentHTML('afterbegin', html);
}

  _generateHtml() {
    return `<h1 class="page-title">
    ${this._data.manufacturer}
    ${this._data.model}
    </h1>

    <article class="details">
      <section>
       <img src= "../../images/${this._data.imageUrl}"/>
        <div>
          <p>Årsmodell: <span>${this._data.modelYear}</span></p>
          <p>Antal körda mil:</p>
          <p>Pris:</p>
          <p>Information:</p>
        </div>
      </section>
    </article>
    `;
  }
}

export default new VehiclesView();