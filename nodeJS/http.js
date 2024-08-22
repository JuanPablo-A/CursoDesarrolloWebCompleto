const http = require('http');

/* 
    Crea un servidor que responde con un mensaje de texto
    al recibir una petición
*/
const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        response.write('Welcome to the server');
        response.end();
        return;
    }

    if (request.url === '/about') {
        response.write('The about page');
        response.end();
        return;
    }

    response.write(`
        <h1>404</h1>
        <p>Esta pagina no existe</p>
        <a href= "/"> Volver a la pagina principal</a>
        `);
    response.end();
})

server.listen(3000); // Puerto donde se ejecuta el servidor

console.log('Server running on port 3000'); 