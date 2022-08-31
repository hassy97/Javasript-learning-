// 3ND VERSION OF SAME CODE 

function Create_user(firstname, lastname, age,country,email,address,hobbies){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.email = email;
    this.address= address
    this.hobbies = hobbies; 
}

// use prototype property of function to add other methods in our createuser

Create_user.prototype.about = function (){
    return `Firstname is ${this.firstname} and last name is ${this.lastname} and address is ${this.address}`
}

Create_user.prototype.Is18 = function (){ 
    return this.age >= 18
}

Create_user.prototype.extraInfo = function (){
    return `and the other information is ${this.hobbies}`
}

Create_user.prototype.sing = function(){
    return 'zamaa khulay janan naa '
}


// const osama = create_user("Muhammad", "osama ",25,"pak","pakhero2gmail.com",212);

const mak = new Create_user("Mak","Khan",22,"USA","balakotibear@gmail.com",332,"listening songs");

// console.log(mak.about())
console.log(mak)


