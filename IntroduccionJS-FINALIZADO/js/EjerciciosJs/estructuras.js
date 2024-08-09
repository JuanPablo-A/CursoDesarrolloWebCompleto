// 1. Crea un array que almacene cinco animales
let animales = ['perro', 'gato', 'toro', 'vaca', 'caballo']

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift('mico')
animales.push('gata')

console.log(animales.length)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)
console.table(animales)

// 4. Crea un set (retorna un objeto) que almacene cinco libros
const set = new Set(["Sapiens: De animales a dioses", "El nombre del viento", "Orgullo y prejuicio", "1984", "Cien años de soledad"])

// 5. Añade dos más. Uno de ellos repetido
set.add("La sombra del viento", "1984")

// 6. Elimina uno concreto a tu elección
set.delete("Cien años de soledad")
console.log(set)

// 7. Crea un mapa que asocie el número del mes a su nombre
const map = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map.has(5))
for (const [key, value] of map){
    if (key === 5)[
        console.log(value)
    ]
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
const summerMonths = [6, 7, 8]
const summerMonthsNames = [] 

for (const [key, value] of map){
    if (summerMonths.includes(key)){
        summerMonthsNames.push(value)
    }
}

map.set("Summer months names", summerMonthsNames)
console.log(map)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const miArray = ["Hola", "Bien", "Como", "Todo", 2, true]
const set2 = new Set(miArray)
console.log(set2)

const map2 = new Map()
map2.set("myKey", set2)
console.log(map2)