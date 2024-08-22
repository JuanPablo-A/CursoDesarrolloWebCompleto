const { readFile } = require('fs/promises');  


async function readText (){
    try {
        const result = await readFile('./data/first.txt', 'utf-8')
        const result2 = await readFile('./data/second.txt', 'utf-8')
        console.log(result)
        console.log(result2)
        
    } catch (error) {
        console.log(error)        
    }
}
readText()

//Como se hacia antes 
// const getText = (pathFile) => {
//   return new Promise((resolve, reject) => {
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve(data)
//         })
//   })
// }

// getText('./data/third.txt')
//     .then( result => { console.log(result) })
//     .then(() => getText('./data/first.txt'))
//     .then( result => { console.log(result) })
//     .catch( err => { console.log(err) })