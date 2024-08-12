// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
let suma = (numero1, numero2) => numero1 + numero2
console.log(suma(2,3))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const numeros = [1, 2, 3, 4, 5]
function mayor (array){
    let mayor = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > mayor){
            mayor = array[i]
        }
    }
    return mayor
}

console.log(mayor(numeros))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const string = "Hola"
const vocales = ['a', 'e', 'i', 'o', 'u']

function contarVocales (cadena){
    let contador = 0
    for (let i = 0; i <= cadena.length; i++){
        if (vocales.includes(cadena[i])){
            contador++
        }
    } 
    return contador
}

console.log(contarVocales(string))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const strings = ['hola', 'mundo', 'como', 'estas']
let stringsMayusculas = strings.map(string => string.toUpperCase())

console.log(stringsMayusculas)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let numero = 4
function esPrimo(numero){
    for (let i = 2; i < numero - 1; i++){
        if (numero % i === 0){
            return false
        }
    }
    return numero !== 1
}
console.log(esPrimo(numero))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]

function elemetosComunes (array1, array2) {
    const array3 = []
    array1.forEach(element => {
        if (array2.includes(element)){
            array3.push(element)
        }
    });
    return array3
}

console.log(elemetosComunes(array1, array2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const numeros2 = [1,2,3,4,5]

function sumaNumerosPares (numeros) {
    let total = 0 
    numeros.forEach((numero) => {
        if (numero % 2 === 0){
            total = total + numero
        }

    })
    return total
}

console.log(sumaNumerosPares(numeros2))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let numerosPotencia = numeros2.map(numero => Math.pow(numero, 2))
console.log(numerosPotencia)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cadenaInvertida = (cadena) => {
    let stringInvertido = ""

    for (let i = cadena.length - 1 ; i >= 0 ; i--){
        stringInvertido = stringInvertido + cadena[i]
    }

    return stringInvertido
} 

console.log(cadenaInvertida("hola"))

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    // Caso base: si n es 0 o 1, el factorial es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Ejemplo de uso
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800