class CreateUser{
    constructor(firstname, lastname, age,country,email,address,hobbies){
    this.firstname = firstname
    this.lastname =lastname;
    this.age = age
    this.country =country
    this.email =email
    this.address =address
    this.hobbies =hobbies
    }

    // here we can define methods 

    about (){
        return `Firstname is ${this.firstname} and last name is ${this.lastname} and address is ${this.address}`
    }
    is18 (){
        return this.age >= 18
    }

    extraInfo (){
        return `and the other information is ${this.hobbies}`
    }
    sing (){
        return 'zamaa khulay janan naa '
    }
}


 // new keyword create a prototype 
const hassy = new CreateUser("Muhammad","Hassan",24,"PAK","hassn@gmail.com",232,"read books")
console.log(hassy)
// cos