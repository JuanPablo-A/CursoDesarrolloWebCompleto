// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const array = [1, 2, 3, 6, 5]
const [primero, segundo] = array
console.log(primero, segundo)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const [uno, dos, tres, cuatro = 4] = array

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const objeto = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid'
}

const {nombre, edad} = objeto
console.log(nombre)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

const {nombre: nombreNuevo, edad: edadNueva} = objeto
console.log(nombreNuevo)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const objetoAnidado = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid',
    trabajo: 'programador',
    direccion: {
        calle: 'calle 1',
        numero: 1
    }
}

const {direccion: {calle, numero} } = objetoAnidado 
console.log(calle)

// 6. Usa propagación para combinar dos arrays en uno nuevo
const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = [...array1, ...array2]

// 7. Usa propagación para crear una copia de un array
const arrayCopia = [...array1]

// 8. Usa propagación para combinar dos objetos en uno nuevo
const objeto1 = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid'
}

const objeto2 = {
    trabajo: 'programador'
}

const objeto3 = {...objeto1, ...objeto2}

// 9. Usa propagación para crear una copia de un objeto
const objetoCopia = {...objeto2}

// 10. Combina desestructuración y propagación
const {nombre: nombreNuevo2, ...resto} = objeto1
console.log(resto)