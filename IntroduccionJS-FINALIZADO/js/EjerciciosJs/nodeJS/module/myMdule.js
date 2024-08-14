let mySecretValue = 'Secret';

const myWebAddress = 'https://www.faztweb.com';
const myNumber = 10;
const myArray = [1, 2, 3, 4, 5];
const user = {
    name: 'Fazt',
    age: 20
};

// module.exports.myWebAddress = myWebAddress;
// module.exports.myNumber = myNumber;
// module.exports.user = user;

module.exports = {
    myWebAddress: myWebAddress,
    myNumber,
    myArray,
    user
};

console.log(module)