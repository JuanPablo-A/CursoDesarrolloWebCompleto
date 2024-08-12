// 1. Crea un objeto con 3 propiedades

const objeto = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid'
 }

// 2. Accede y muestra su valor
console.log(objeto.nombre)

// 3. Agrega una nueva propiedad
objeto.trabajo = 'programador'

// 4. Elimina una de las 3 primeras propiedades
delete objeto.ciudad

// 5. Agrega una función e invócala
objeto.saludar = () => console.log('Hola')
console.table(objeto)

// 6. Itera las propiedades del objeto
for (let propiedad in objeto){
    console.log(`${propiedad}: ${objeto[propiedad]}`)
}

// 7. Crea un objeto anidado
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
console.log('')
console.log(objetoAnidado.direccion)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objetoAnidado.direccion.calle)

// 9. Comprueba si los dos objetos creados son iguales
console.log(objeto === objetoAnidado)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objeto.nombre === objetoAnidado.nombre)