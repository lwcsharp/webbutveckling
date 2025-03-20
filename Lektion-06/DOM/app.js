/***************************************************/
// DOM Selectors (lokalisera elment i DOM)
/***************************************************/
// Det gamla sättet...
// document.getElementById()...
// console.log(document.getElementById('app-title'));

const title = document.querySelector('#app-title');
console.log(title);
// title.innerHTML = '<i>Ny titel</i>';
title.innerText = 'Att köpa';
console.log(title.getAttribute('id'));
console.log(title.id);
title.setAttribute('data', 'titta det fungerar');

// Dynamiskt ändra stilar...
title.style.color = '#ff00ff';
title.style.backgroundColor = '#ddd';
title.style.borderRadius = '1rem';
title.style.padding = '0.6rem';
title.style.border = 'solid 1px #333';
title.style.background = '#ffff00';
title.style.boxShadow = '1px 1px 10px 2px rgba(0,0,0,0.6)';

// Dynamiskt manipulera li elementen...
const listItems = document.querySelectorAll('li');
console.log(listItems);
listItems[0].style.color = '#ff0afa';

listItems.forEach((item) => {
  item.style.fontSize = '1.3rem';
  item.style.color = '#ff0afa';
  item.style.fontWeight = '700';
  item.style.fontStyle = 'italic';
});

// Addera ett element på sidan...
const button = document.createElement('button');
button.innerText = 'Klicka på mig';
const placeHolder = document.querySelector('#demo');
placeHolder.appendChild(button);
console.log(button);
