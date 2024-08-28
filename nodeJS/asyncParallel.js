import { readFile } from 'fs/promises';

Promise.all([
    readFile('file1.txt', 'utf8'),
    readFile('file2.txt', 'utf8'),
]).then(([text, secondText]) => {
    console.log(text);
    console.log(secondText);
});