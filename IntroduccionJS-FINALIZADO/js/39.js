// Performance y multiple Async / Await
const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/photos";

// En este caso, las peticiones se hacen una despues de la otra, lo que hace que el tiempo de respuesta sea mayor
const consultarApi = async () => {
    try {
        const inicio = performance.now();

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        console.log(data2);

        const response3 = await fetch(url3);
        const data3 = await response3.json();
        console.log(data3);
        
        const fin = performance.now();

        console.log(`Tiempo de la PRIMER funcion es: ${fin - inicio} ms`);
    } catch (error) {
        console.log(error.message);
    }
};
consultarApi();

// Ahora, se pueden hacer las peticiones al mismo tiempo y da un mejor performance
const consultarApi2 = async () => {
    try {
        const inicio = performance.now();

        // Como las peticiones no dependen una de la otra, se pueden hacer al mismo tiempo
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);
        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()]);

        console.log(data);
        console.log(data2);
        console.log(data3);
        
        const fin = performance.now();

        console.log(`Tiempo de la SEGUNDA funcion es: ${fin - inicio} ms`);
    } catch (error) {
        console.log(error.message);
    }
}
consultarApi2();