const express = require('express')
const app = express()

/*
    Querys:
    - Son parametros que se envian en la url despues del signo de interrogacion ( ? )
    - all funciona con todos los metodos http
*/
app.all('/info', (req, res) => {
    res.send('Información sobre la API')

})

app.get('/hello/:username', (req, res) => {

    const {user, age} = req.query
    res.send(`Hola ${req.params.username.toUpperCase()}, ${user} tienes ${age} años`)
})

app.get('/search', (req, res) => {
    
    if (req.query.q === 'javascript books'){
        return res.send('Resultados de la busqueda de libros de JavaScript')
    }

    res.send('No se encontraron resultados')
    
})

app.listen(3000)
console.log(`server on port ${3000}`)
