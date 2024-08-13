class Person {
    //Propiedades   
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

const company = { 
    name: 'Google',
    employees: []
};

const jhon = new Person('Jhon', 'Doe');
const maria = new Person('maria', 'Doe');

//Asociacion
maria.parent = jhon;

//Agregacion
company.employees.push(maria);
company.employees.push(jhon);

console.log(maria); 
console.log(jhon); 
console.log(company);
