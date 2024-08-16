// Optional chaining (?)
const alumno = {
    nombre: 'juan',
    clase: 'programacion 1',
    aprobado: true,
    examenes: {
        nota: 90
    }
}
console.log(alumno.examenes?.nota);
console.log('despues de alumno')

// Nullish coalescing operator (??)
const pagina = null ?? 1; // si pagina es null o undefined, asigna 1 