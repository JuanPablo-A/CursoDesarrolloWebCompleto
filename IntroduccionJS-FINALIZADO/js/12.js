// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze(producto);  Congela el objeto y no deja agregar, eliminar o modificar propiedades
// console.log(Object.isFrozen(producto));  Saber si un objeto está congelado

Object.seal(producto); // Si deja modificar propiedades pero no agregar o eliminar

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);