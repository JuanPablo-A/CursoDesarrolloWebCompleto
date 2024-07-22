//querySelector: retorna el primer elemento que cumpla con el selector
const heading = document.querySelector('.header__texto h2'); //Retorna cero o el primer elemento que cumpla con el selector
heading.textContent = 'Nuevo Heading';
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].classList.add('nueva-clase');
//enlaces[0].textContent = 'Nuevo Texto para Enlace';
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById
const heading2 = document.getElementById('heading');

//Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Nuevo OK';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

console.log(1);

window.addEventListener('load', function() {  //load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
})

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){  //DOMContentLoaded espera a que el HTML esté listo, no espera a CSS o imagenes
    console.log(4);
})

console.log(5);

window.onscroll = function() {
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault(); //Previene la acción por defecto
//     console.log('Enviando formulario');
// })

//Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

//VARIABLES
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//ADD EVENT LISTENERS
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento submit 
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //Validar el formulario

    //Enviar el formulario
})

//FUNCIONES
function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}



