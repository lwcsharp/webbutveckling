/*******************************************************/
// Introduktion till DOM
/*******************************************************/
// Globalt objekt som befinner sig högst upp i hierarkin...
console.log(window);
// window.alert('Hej på dig!');

console.log(window.document);
console.log(document);

console.log(document.documentElement);
console.log(document.head);
console.log(document.head.children);
console.log(document.head.children[3]);
console.log(document.head.children[3].innerHTML);
// document.head.children[3].innerHTML = 'Test';

console.log(document.links);
console.log(document.links[0].href);
document.links[0].href = 'https://angular.dev/';
console.log(document.links[0].href);

// FARLIGT!!!
// document.body.innerHTML = '<h2>DOM är skitkul 🤯</h2>';
// document.write('JavaScript är störtskönt att arbeta med 🤣');

// console.log(document.all);
// console.log(document.domain);
console.log(document.URL);

document.links[0].className = 'link';
document.links[1].style.color = '#00ffff';
document.links[1].style.textDecoration = 'none';

// document.links.forEach((link) => console.log(link));
const links = Array.from(document.links);
links.forEach((link) => (link.style.fontSize = '3rem'));
