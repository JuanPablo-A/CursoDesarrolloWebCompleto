const { render } = require('ejs');
const { Router } = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        tittle: 'Index page'
    });
});

router.get('/about', (req, res) => {

    res.render('about');
})

router.get('/dashboard', (req,res) => {
    res.render('dashboard');
})

router.get('/posts', async (req, res) => {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        const results = data.results
        console.log(results)
        
        res.render('posts', {
            people: results,
        });

    } catch (error) {
        console.error('Error:', error)
        res.status(500).send('Error en la solicitud');
    }
})  

module.exports = router;