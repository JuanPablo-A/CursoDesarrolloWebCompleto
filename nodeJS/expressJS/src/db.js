// Plantilla para la conexion con una base de datos en express

const mysql = require('mysql2/promise')

async function connectDB (){
    
    const connection = await mysql.createConnection({
        host: '',
        user: '',
        passwor: '', 
        database: ''
    })

    const result = connection.query('SELECT 1 + 1 AS Result')
    console.log(result)
}

module.exports = connectDB