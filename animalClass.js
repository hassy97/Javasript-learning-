class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    eat(){
        return `${this.name} is eating`
    }

    isCute (){
        return this.age <=1 
    }
}


class Dog extends Animal {
    constructor(name,age,speed){
        super(name,age)
    }
    run(){
        return `${this.name} is running`
    }

    eat(){
        return `modified ${this.name} is eating`
    }
}


//getter and setter 

class person{
    constructor(firstname,lastname,age){
this.firstname =firstname
this.lastname =lastname
this.age = age
    }
}

// object and instance 
const tommy = new Dog("tommy",2,45)
console.log(tommy.run());  

console.log(tommy.eat())