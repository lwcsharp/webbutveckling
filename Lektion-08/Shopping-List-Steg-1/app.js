import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
  clearStorage,
} from './storage.js';

/***********************************/
// Shopping List steg 1.
/***********************************/
// Referenser till elementen.
const groceryForm = document.querySelector('#item-form');
const groceryInput = document.querySelector('#item-input');
const groceryList = document.querySelector('#item-list');
const clearAll = document.querySelector('#clear');

const initApp = () => {
  const groceries = getFromStorage();
  console.log(groceries);
  groceries.forEach((grocery) => {
    addGroceryToDom(grocery);
  });
};

// Funktion för att hantera tillägg av ny vara att köpa...
const handleAddGrocery = (e) => {
  e.preventDefault();

  const grocery = groceryInput.value;

  if (grocery.length === 0) {
    const errorMsg = createErrorMessage(
      'Du måste ange något för att lägga till listan'
    );
    document.querySelector('.message-container').appendChild(errorMsg);

    setTimeout(() => {
      document.querySelector('#error-message').remove();
    }, 2000);

    return;
  }

  addGroceryToDom(grocery);
  addToStorage(grocery);

  // Töm textrutan...
  groceryInput.value = '';
};

const addGroceryToDom = (grocery) => {
  const item = document.createElement('li');

  item.appendChild(document.createTextNode(grocery));
  const button = document.createElement('button');
  button.classList.add('btn-link', 'text-red');

  const icon = document.createElement('i');
  icon.classList.add('fa-regular', 'fa-trash-can');

  button.appendChild(icon);

  item.appendChild(button);

  groceryList.appendChild(item);
};

const createErrorMessage = (message) => {
  const errorDiv = document.createElement('div');
  errorDiv.setAttribute('id', 'error-message');
  errorDiv.appendChild(document.createTextNode(message));
  errorDiv.classList.add('error-message', 'show');

  return errorDiv;
};

const handleClickGrocery = (e) => {
  if (e.target.parentElement.classList.contains('btn-link')) {
    const item = e.target.parentElement.parentElement;

    // Ta bort ifrån localStorage...
    removeFromStorage(item.textContent);
    item.remove();
  }
};

const handleClearList = () => {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild);
  }

  clearStorage('groceries');
};

// Händelsehantering...
document.addEventListener('DOMContentLoaded', initApp);
groceryForm.addEventListener('submit', handleAddGrocery);
clearAll.addEventListener('click', handleClearList);
groceryList.addEventListener('click', handleClickGrocery);
