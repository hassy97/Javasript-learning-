const userMethods = {
    about :function (){
        return `Firstname is ${this.firstaname} and last name is ${this.lastname} and address is ${this.address}`
    },

    Is18 :function (){ 
        return this.age >= 18
    }
}


function create_user(firstname, lastname, age,country,email,address){

    const user = Object.create.apply(userMethods);  // create a empty object {} and also creting a __proto__ channing (ab hum usermethods object  se jake call kr skte han wo chezain jo is 'user'object main nahi han )

    user.firstname = firstname;
    user.lastname = lastname;
    user.age = age;
    user.country = country;
    user.email = email;
    user.address;
    user.about = userMethods.about;
    user.Is18  = userMethods.Is18;

    // 

    // method for that function 
    // user.about = function (){
    //     return `Firstname is ${this.firstaname} and last name is ${this.lastname} and address is ${this.address}`
    // }

    // user.Is18 = function (){ 
    //     return this.age >= 18
    // };

    return user
}

// const hassaan = create_user("Muhammad","hassaan",23,"pak","hassan@gmail.com",41);
// console.log(hassaan.Is18())
// console.log(hassaan)

// const osama = create_user("Muhammad ", "osama ",25,"pak","pakhero2gmail.com",212);

// console.log(osama)


