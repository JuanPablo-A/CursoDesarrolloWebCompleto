const os = require('os')

console.log(os.userInfo()); // Devuelve un objeto con la información del usuario
console.log(os.uptime()); // Devuelve el tiempo que lleva encendido el sistema
console.log(os.platform()); // Devuelve el sistema operativo del computador
console.log(os.totalmem()); // Devuelve la cantidad de memoria total del sistema
console.log(os.freemem()); // Devuelve la cantidad de memoria libre del sistema

console.table( {
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
} )