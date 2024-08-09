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
let edad = 17;

if (edad >= 18){
    console.log("Es mayor de edad")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
edad = edad >= 18 ? 'adulto': 'menor';
console.log(edad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const fecha = new Date()
const año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;

if (mes <= 6 && mes >= 3){
    console.log('Primavera')

}else if (6 < mes && mes <= 9) {
    console.log('verano')

} else if (9 < mes && mes < 12) {
    console.log('otoño')
} else {
    console.log('invierno')
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
function obtenerDiasDelMes(mes, año) {
    switch (mes) {
        case 1: // Enero
        case 3: // Marzo
        case 5: // Mayo
        case 7: // Julio
        case 8: // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            return 31;
        case 4: // Abril
        case 6: // Junio
        case 9: // Septiembre
        case 11: // Noviembre
            return 30;
        case 2: // Febrero
            // Verificar si es un año bisiesto
            if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
                return 29;
            } else {
                return 28;
            }
        default:
            return 0; // Caso no válido
    }
}

console.log(`El mes ${mes} del año ${año} tiene ${obtenerDiasDelMes(mes, año)} días.`);
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'es';

switch (idioma) {
    case 'es':
        console.log('Hola')
        break
    case 'en':
        console.log('hello')
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('primavera')
        break
    case 7:
    case 8:
    case 9:
        console.log('verano')
        break
    case 10:
    case 11:
        console.log('otoño')
        break
    default:
        console.log('invierno')
    
    }

// 10. Usa un switch para hacer de nuevo el ejercicio 7