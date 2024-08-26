const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
/*
    Middleware:
    - Es una funcion que se ejecuta antes de que llegue a una ruta
    - No tiene nombre porque cualquier ruta que llegue a mi app va a pasar por este middleware
    - Se ejecuta en el orden en que se declara
    - Para no proteger todas las rutas, se pueden agregar las rutas antes del middleware, el orden de las funciones y rutas es importante
    - Si o si se debe llamar a next() para que la aplicacion continue 
*/
app.use(express.json())
app.use(morgan('dev'))

app.get('/profile', (req, res) => {
    res.send('Profile page')
})

app.get('/note.txt', (req, res) => {
    res.send('Note page')
})

app.all('/info', (req, res) => {
    res.send('Info page')
})

// Middleware para proteger rutas
// app.use((req, res, next) => {
//     if (req.query.login === 'Juan@juanweb.com'){
//         next()
//     } else {
//         res.send('No tienes acceso a esta ruta')
//     }
// })

app.get('/dashboard', (req,res) => {
    res.send('Dashboard page')
})

console.log(__dirname)

/**
 * Middleware para servir archivos estaticos
 * Primero se debe acceder a la ruta /public antes de acceder a los archivos
 * Casi siempre se coloca al final de todas las rutas para que no interfiera con las rutas de la aplicacion
 * Primero busca en las rutas de la aplicacion y si no encuentra la ruta, busca en la carpeta public que tiene los archivos estaticos
 */
app.use('/public', express.static(path.join(__dirname, '../public'))) //concatena la ruta actual con la carpeta public
app.use('/uploads', express.static(path.join(__dirname, '../uploads'))) 

app.listen(3000)
console.log(`server on port ${3000}`)