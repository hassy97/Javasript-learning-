// dender '__' method or __proto__ or in ecmascript [[prototypoe]]
// What is __ proto __ in JavaScript?
// __proto__ is a way to inherit properties from an object in JavaScript.
// __proto__ is an internal property of an object, pointing to its prototype

// Each object has a private property which holds a link to another object called its prototype. 


const employee = {
    name:"John Doe",
    age:31,
    empID:101
}


const extraImfo_emp = Object.create(employee); // create a empty object {} and also creting a __proto__ channing 

console.log(extraImfo_emp)

// output 

// {}
// [[Prototype]]: Object
// age: 31
// empID: 101
// name: "John Doe"

