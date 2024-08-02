// Fetch API con promises
const url = 'https://jsonplaceholder.typicode.com/122';

fetch(url)
    .then( response => {
        if (response.ok) {
            return response.json()
        } 
        throw new Error('Request failed')
    })
    .then( data => console.log(data) )
    .catch( error => console.log(error) );