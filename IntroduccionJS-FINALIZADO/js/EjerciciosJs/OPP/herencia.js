class User{
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}

class Programmer extends User {
    constructor(name, lastName, age, language){
        super(name, lastName, age);
        this.language = language;
    }
}

const programmer = new Programmer('Ryan', 'Ray', 30, 'JavaScript');
console.log(programmer);