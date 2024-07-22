// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes: verifica si un valor existe en un arreglo
let resultado = meses.includes('Diciembre');

// Some (ideal para arreglo de objetos): verifica si un valor existe en un arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular PRO'
})

// Reduce: Toma los precios y los suma
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);


// Filter:  obtener un arreglo basado en una condición
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
});



console.log(resultado);
