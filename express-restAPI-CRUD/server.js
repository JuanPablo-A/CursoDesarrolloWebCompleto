const express = require('express');
const morgan = require('morgan');

const app = express();
let products = [
    { id: 1, name: 'laptop', price: 1000 },
];

app.use(morgan('dev'));
app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1};
    products.push(newProduct);
    res.send(newProduct);
});

app.put('/products/:id', (req, res) => {
    const newData = req.body;  
    const productFind = products.find(product => product.id === parseInt(req.params.id));

    if (!productFind) return res.status(404).json({error: 'producto no encontrado'});

    products = products.map(product => product.id === parseInt(productFind.id) ? {...product, ...newData} : product);
    console.log(products);

    res.json({
        message: 'product updated successfully',
    });
});

app.delete('/products/:id', (req, res) => {
    const productFind = products.find(product => product.id === parseInt(req.params.id));
    if (!productFind) return res.status(404).json({error: 'producto no encontrado'});

    products = products.filter(product => product.id !== parseInt(productFind.id));
    res.sendStatus(204);
});

app.get('/products/:id', (req, res) => {
    const productFind = products.find(product => product.id === parseInt(req.params.id));

    /**
     * si no se encuentra el producto se envia un mensaje de error
     */
    if (!productFind) return res.status(404).json({error: 'producto no encontrado'});
    res.send(productFind);
});

app.listen(3000);
console.log(`server on port ${3000}`);