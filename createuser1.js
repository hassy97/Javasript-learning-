// 2ND VERSION OF SAME CODE 
function create_user(firstname, lastname, age,country,email,address,hobbies){

    const user = Object.create(create_user.prototype) ; //here we make a link to the prototype for accesing if not in this objects 
    user.firstname = firstname;
    user.lastname = lastname;
    user.age = age;
    user.country = country;
    user.email = email;
    user.address= address
    user.hobbies = hobbies;

    return user 
}

// use prototype property of function to add other methods in our createuser

create_user.prototype.about = function (){
    return `Firstname is ${this.firstname} and last name is ${this.lastname} and address is ${this.address}`
}

create_user.prototype.Is18 = function (){ 
    return this.age >= 18
}

create_user.prototype.extraInfo = function (){
    return `and the other information is ${this.hobbies}`
}

create_user.prototype.sing = function(){
    return 'zamaa khulay janan naa '
}


const osama = create_user("Muhammad", "osama ",25,"pak","pakhero2gmail.com",212);

console.log(osama.about())


