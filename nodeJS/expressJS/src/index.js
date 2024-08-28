const express = require('express');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./db')
require('ejs');

connectDB()

const app = express();

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

// Settings 
app.set('case sensitive routing', true);
app.set('appName', 'Express Tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use(homeRoutes);
app.use(userRoutes);

// Routes
app.use('public', express.static(path.join(__dirname, './public')));
app.use("uploads", express.static(path.join(__dirname, './uploads')));

app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);