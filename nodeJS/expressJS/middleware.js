const express = require('express')
const morgan = require('morgan')

const app = express()

/*
    Middleware:
    - Es una funcion que se ejecuta antes de que llegue a una ruta
    - No tiene nombre porque cualquier ruta que llegue a mi app va a pasar por este middleware
    - Se ejecuta en el orden en que se declara
    - Para no proteger todas las rutas, se pueden agregar las rutas antes del middleware, el orden de las funciones y rutas es importante
    - Si o si se debe llamar a next() para que la aplicacion continue 
*/

app.use(morgan('dev'))

app.get('/profile', (req, res) => {
    res.send('Profile page')
})

app.all('/info', (req, res) => {
    res.send('Info page')
})


app.use((req, res, next) => {
    if (req.query.login === 'Juan@juanweb.com'){
        next()
    } else {
        res.send('No tienes acceso a esta ruta')
    }
})

app.get('/dashboard', (req,res) => {
    res.send('Dashboard page')
})

app.listen(3000)
console.log(`server on port ${3000}`)