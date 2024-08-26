const express = require('express');
const morgan = require('morgan');

const app = express();

// Configuraciones
app.set('appName', 'Express course');
app.set('port', 3000);
app.set('case sensitive routing', true); // case sensitive: cada vez que se haga una peticion se debe hacer con el mismo formato que se definio

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.get('/note', (req, res) => {
    res.send('This is a note');
})
app.get('/UserName', (req, res) => {
    res.send('User name route');
})

app.listen(app.get('port'));
console.log(`server ${app.get('appName')} on port ${app.get('port')}`);