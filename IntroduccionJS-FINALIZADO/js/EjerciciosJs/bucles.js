// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i < 21; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i < 101; i++){
    suma = suma + i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i < 51; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ['Juan', 'Pepito', 'Pepita', 'Monica']
nombres.forEach(nombre => {
    console.log(nombre)
});

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const palabra = 'Hola'
let contador = 0;

for (let letra = 0; letra < palabra.length; letra++){
    if (esVocal(palabra[letra])){
        contador++
    }
}
console.log(contador)

function esVocal (letra){
    const vocales = "aeiouAEIOU"
    return vocales.includes(letra)
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numeros = [1,2,3,5,]
let total = 1
numeros.forEach(numero => {
    total = numero * total
})
console.log(total)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let multiplos = 1
for (let i = 1; i < 10; i++){
    console.log(multiplos)
    multiplos = 5 * i
}

// 8. Usa un bucle para invertir una cadena de texto
const cadena = "hola"
let cadenaInvertida = "";

for (let i = cadena.length - 1; i >= 0; i--){
    cadenaInvertida = cadenaInvertida + cadena[i];
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numeros2 = [1,2,3,4,10,5,6,7,12,25,23,22] 
const numerosMayores = []

for (let i = 0; i <= numeros2.length; i++){
    if (numeros2[i] > 10) {
        numerosMayores.push(numeros2[i])
    }
}
console.log(numerosMayores)