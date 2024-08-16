const http = require('http')
const { createReadStream } = require('fs')

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigFile.txt', {
        encoding: 'utf-8'
    })

    /* 
        Enviar un dato a otra funcion 
    */
    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    fileStream.on('error', error => {
        console.log(error)
    })

})

server.listen(3000)
console.log('Server on port 3000')