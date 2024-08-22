const express = require('express')

const app = express()

app.get('/products', (req, res) => {
    res.send('List of products')
})

app.post('/products', (req, res) => {
    res.send('Adding a product')
})

app.put('/products', (req, res) => {
    res.send('Update a product')
})

app.delete('/products', (req, res) => {
    res.send('Delete a product')
})

app.patch('/products', (req, res) => {
    res.send('Update a chunck of the product')
})

app.listen(3000)
console.log(`server on port ${3000}`)

