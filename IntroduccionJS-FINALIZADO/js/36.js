// Evaluacion de corto circuito 

//const auth = true;
// if (auth) {
//     console.log('Truthy');
// } else {
//     console.log('Falsy');
// }

const auth = true;
user && console.log('Usuario existe'); // Como no usamos ninguna segunda condicion, si user es true, se ejecuta el console.log