const fs = require('fs')

// const first = fs.readFileSync('./data/first.txt', 'utf-8') // Lee un archivo de forma sincrónica y devuelve un buffer
// const second = fs.readFileSync('./data/second.txt', 'utf-8')

// const third = fs.writeFileSync('./data/third.txt', `Here is the result: of he third file`) // Crea un archivo de forma sincrónica

fs.readFile('./data/first.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err)
        return
    }

    console.log(result)

    fs.readFile('./data/second.txt', 'utf-8',(err, result) => {
        if(err){
            console.log(err)
            return
        }
    
        console.log(result)

        fs.writeFile('./data/newFile.txt', 'Archivo creado desde fs', (err, result) => {
            if(err){
                console.log(err)
                return
            }
        
            console.log(result)
        })
    })
})

