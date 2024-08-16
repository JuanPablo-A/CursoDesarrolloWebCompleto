const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// No modificar el objeto original

const nuevoProducto = { ...producto, ...medidas };  //Spread operator: Se utiliza el operador de propagación ... para copiar todas 
                                                    //las propiedades y valores del objeto producto en el nuevo objeto.

console.log(producto);
console.log(nuevoProducto);