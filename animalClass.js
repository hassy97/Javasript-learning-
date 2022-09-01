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
    fullname (){
        return `${this.firstname} and ${this.lastname}`
    }

}

// object and instance 
// const tommy = new Dog("tommy",2,45)
// console.log(tommy.run());  


// class 


// console.log(tommy.eat())

const hasan = new person("hassan","hameed", 25);
console.log(hasan)


console.log(hasan.lastname)



