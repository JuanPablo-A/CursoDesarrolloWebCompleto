// Escribe una función que calcule la suma de los primeros n números 
// enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

const sumaRecursiva = (n) => {
    if(n === 0) {
        return 0;
    }
    console.log(n);
    return n + sumaRecursiva(n - 1);   
}
console.log(sumaRecursiva(3));


const fibonacci = (n) => {
    if(n === 1) return 0;
    if(n === 2) return 1;
    console.log(n);
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13