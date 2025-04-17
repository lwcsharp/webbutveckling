export default class View {
  _parentElement = undefined;
  _data = undefined;

  constructor(parentElement) {
    console.log(parentElement);
    this._parentElement = parentElement;
  }

  render(data) {
    this._data = data;
    this._clearHtml();
    const html = this._generateHtml();
    this._parentElement.appendChild(html);
    this._generateImageEvent();
  }

  _clearHtml() {
    this._parentElement.innerHtml = '';
  }
}
