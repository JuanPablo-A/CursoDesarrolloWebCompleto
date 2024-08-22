const path = require('path')

const filePath = path.join('/public', 'dist', '/styles', 'main.css'); // Devuelve la ruta completa de un archivo

console.log(path.basename(filePath)); // Devuelve el nombre del archivo
console.log(path.dirname(filePath)); //  Devuelve el directorio del archivo
console.log(path.parse(filePath));  // Devuelve un objeto con la información del archivo
console.log(path.resolve('dist'));  //  resuelve una ruta y la completa con la ruta actual