const express = require('express')

const app = express()

app.get('/hello/:username', (req, res) => {
    res.send(`Hola ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`result = ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {

    if (req.params.username === 'admin') {
        return res.sendFile('./Screenshot 2023-05-25 013708.png', {root: __dirname})
    }

    res.send('No tienes permiso para ver esta imagen')

})

app.get('/name/:name/age/:age', (req, res) => {
    const {name, age} = req.params
    res.send(`Hola ${name}, tienes ${age} años`)
})

app.listen(3000)
console.log(`server on port ${3000}`)