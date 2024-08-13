//Polimorfismo

//Overloading
function countItems (x){
    return x.toString().length;
}
console.log(countItems(1000));

function sum (x = 0, y = 0, z = 0){
    return x + y + z;
}
console.log(sum(1, 2));

function writeFFullName(Person){
    return `${Person.name} ${Person.lastName}`;
}


//Parametrico
class Stack {
    constructor(){
        this.items = [];
        this.push = function(item){
            this.items.push(item);
        }
    }
    
}
const stack = new Stack();
stack.push(1);

const stack2 = new Stack();
stack2.push('Hola');

console.log(stack);
console.log(stack2);

//Subtype 
class Person {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

class Programmer extends Person {
    constructor(name, lastName, language){
        super(name, lastName);
        this.language = language;
    }
}

const jhon = new Person('Jhon', 'Doe');
const maria = new Programmer('Maria', 'Doe', 'JavaScript');

console.log(`Mi nombre es ${writeFFullName(jhon)}`);
console.log(`Mi nombre es ${writeFFullName(maria)}`);