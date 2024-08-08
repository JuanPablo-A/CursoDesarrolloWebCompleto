// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = null ?? 'Juan';
console.log(nombre)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const USUARIO = 'Juan Pablo'
const PASSWORD = '1234567'

if (USUARIO === 'Juan' &&  PASSWORD === '1234567') {
    console.log('Usuario correcto')
} else {
    console.log('usurio o contraseña incorrectos')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = 0;
if (numero > 0) {
    console.log('El número es positivo')
} else if (numero < 0) {
    console.log('El número es negativo')
} else {
    console.log('El número es cero')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edad = 17;

if (edad >= 18){
    console.log("Es mayor de edad")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7