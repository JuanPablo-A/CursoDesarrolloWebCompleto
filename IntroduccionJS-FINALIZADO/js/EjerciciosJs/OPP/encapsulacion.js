//Encapsulacion
class Company{
    constructor(name){
        this.name = name;
        let employees = [];

        this.getEmployee = function(){
            return employees;
        }

        this.addEmployee = function(employee){
            employees.push(employee);
        }
    }
}

const company = new Company('Google');

company.addEmployee('Maria');
console.log(company.getEmployee());