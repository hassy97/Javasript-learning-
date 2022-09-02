// function printDetail(){
//     console.log("My name is Hassan")
// }

// function foo(a){
//     console.log("inside the foo function")

//     a();
// }

// foo(printDetail);




// define function to be used as a callback function
// function A() {
//     console.log('function A');
//  }
 
//  // define function that triggers callback function
//  function B(callback) {
//     callback();
//  }
 
//  // execute function that triggers callback function
//  B(A); // expected log: 'function A'


// // function returing a fuction   

// const myapp = ()=> {

// function hello(){
//     console.log("hello ")
// }

// return hello
// }

// const answr = myapp

// console.log(answr)


function getTwonumberadd(number1, number2,callback){
    console.log(number1,number2);
    callback(number1,number2);
}

function addTwoNumbers(number1, number2){
    console.log( number1 + number2)
}

getTwonumberadd("4","5",addTwoNumbers); 
