// Manipular elementos HTML con JavaScript
const heading = document.querySelector('.heading'); 
const enlaces = document.querySelectorAll('.navegacion a');

heading.textContent = 'Nuevo Heading';
heading.id = 'newId';
heading.removeAttribute('id');

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Un valor por defecto';

enlaces.forEach( enlace => { enlace.textContent = 'Nuevo Texto' });