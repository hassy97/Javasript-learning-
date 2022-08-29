console.log("learning javascript");

// let and const are the block-scoped variable



// // varibales 

// var firstname = "Muhammad"
// var lastname = "Hassaan"
// console.log(lastname)
// // constant 
// const height = 6

// // let keyword 
// let country = "pakistan"


// firstname.trim()
// let news = country.slice(1,5) // is

// console.log(news)


// type casting  number to string  and vice verssa


let age = 22
// console.log(typeof age)
age = age + ""

console.log(typeof age)


// convert string into numbers


var firstname = "112"
var lastnaem = "8"

var fullname = +firstname  + +lastnaem
console.log( typeof fullname)


console.log(typeof null)




var firstname = "112"
var lastnaem = "8"

var fullname = +firstname  + +lastnaem
console.log( typeof fullname)


console.log(typeof null)

 // use ternary intead of if else 
let age1 = 18
let drink = age >= 18 ? "tea" : "coffee" 


let  firstname = "Hassaan"
//let age = 21

if(firstname[0] === "H" && age>18){
    console.log("That is rihjt person");
}
else{
    console.log("wrong");
}


// swith case for the months

let month = 1

switch(month){
    case 1:
        console.log('Janurary');
        break;
    case 2:
        console.log("Febrary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;    
   case 11:
        console.log('November');
        break;
    case 12:
        console.log('Decemebr'); 
        break;

    }


    var num = 10
// for(let i=0; i < num; i++){
//     console.log(i)
// }

var i =0;
while(i < num){
    console.log(i)
    i++;
}



// arrays are ordered collection of data
 // push,pop shift and unshift methods 
 var employee = ["MAK","BEEN","Hassy"]
 console.log(employee)
 
 employee.push("Muhammad")
 employee.push("Muhammad Saad Hassan")
 
 
 
 employee.pop()
 console.log(typeof employee)
 
 
 console.log(Array.isArray(employee))
 
 // if stored on the first position
 
 employee.unshift("GB")
 console.log(employee)
 
 // if delete on the first position
 
 employee.shift("GB")
 console.log(employee)



 // how to clone the arrays 
let arr1 =["Hassaan","Been","MAk","saad","Mubi"]
// let arr2 = arr1.slice(0);
// console.log(arr1 === arr2)

// 2nd way to clone by using concatinate

// let arr2 = [].concat(arr1)


// new way by using a spread operator 

let arr2 = [...arr1]

// push in array 
arr1.push("GB")
console.log(arr1)
console.log("array2  elements are given below")
console.log(arr2)



// LOOPS synatx use for arrays



let fruits = ["apple", "mango", "banana", "peach","oranges"]

// // print using for loop
// for(let i = 0; i <fruits.length; i ++ ){
//     console.log(fruits[i])
// }


//print using the for of 

// for(let fruit of fruits){
//     console.log(fruit)
// }

//


// for in loop syntax

let storesFruits = []
for(let index in fruits){
    storesFruits.push((fruits[index]))

}
console.log(fruits)

//

// destructing the array

let array11 = ["value1","value2","value3","value4","value5"]

 // using the spread operator destructure the array 
let [myvar1, myvar2, ...newRemainElements] = array11
console.log(newRemainElements)
console.log(myvar1)
console.log(myvar2)


// by using the slice method

let newarr = array11.slice(3);
console.log(newarr);

//



// objects

person = {
    name: "Hassaan",
    age:22,
    country:"pak",
    "country visited" : ["pak", "saudia "]
}

const  key = "mail"

person[key] = "hassaanhameed786@gmail.com"
// console.log(person)



// iterate the object Object.keys and for in for of

// for(let key in person){
//     console.log(key,":",person[key])
// }

for(let key of Object.keys(person)){
    console.log(person[key])
}
///


// An object property can itself be an object like name in the student 
const student = {
    // 
    name : {
        firstname : "muhammad ",
    lastname : "hassaan"
    
    },
    university : "fast",
    "elective courses" : ["AP","NLP","DIP","Simulation","web"],
    bio(){ 
        console.log(`My name is ${this.firstname} ${this.lastname} , and  i m graduated from ${this.university} & elective course are ${this["elective courses"]}` )
    },
    introduceSelf: function () {
            console.log("Hi!" );
          }    


    
    // introduceSelf () {
    //     console.log("i already did my introduction ")
    // }
    

}


let run =student.introduceSelf()


///
function iseven(num){
    if(num%2 == 0){
        console.log(`The number ${num} is even `)
    }
    else{
        console.log(`The  number ${num} is odd `)
    }
}

iseven(9);

///
function FindTarget(array,target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    retun -1 // nothing found 
}
let arr = [1,23,412,6,2,8,11,22,3,4,5,7]
FindTarget(arr ,9);

///