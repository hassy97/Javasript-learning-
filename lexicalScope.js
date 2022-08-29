// block scope 
{
    let ticket = 2000
    const bus = "Daewoo"

}
 // Uncaught ReferenceError: ticket is not defined becauce of the block scope
// console.log(ticket)

//function scope 

const trainId = 209822
console.log(trainId);

//lexical scope 


var bar = "radio_xml"
function app(){

    function myFun(){
      // var bar = "radio_xml"
        console.log("inside the Myfunc ::" ,"and the value of varaible is ", bar)
    }
   // myFun()
    const foo= function (){
        console.log(" function declaration")
    }
    const foo1 = () =>{
        console.log("Arrow function ")
    }



    console.log("inside the app function")
}

//app();
//foo(); // foo is not defined becauce function scope






function fee(a,b ,...arr){
    console.log(`the value of a : ${a}`);
    console.log(`the value of b: ${b}`);
    console.log(`the value of array  : `,arr.length);
  
  
  }
fee(10,2,1,2,3,4,5,6,7,8,9)


