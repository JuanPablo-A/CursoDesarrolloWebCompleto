const { writeFile } =  require('fs/promises')

const createBigFile = async () => {
    await writeFile('./data/bigFile.txt', 'hello word'.repeat(100000))
}
createBigFile()


//lee un archivo grande por trozos
// const { createReadStream } = require('fs')

// const stream = createReadStream('./data/bigFile.txt', {
//     encoding: 'utf-8'
// })

// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// stream.on('end', () => {
//     console.log('Ya termine de leer el archivo')
// }) 

// stream.on('error', (error) => {
//     console.log(error)
// })
