const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
   

const cat2 ={
    name : "chuntu",
    breed: "persian",
    color: "green",
    greeting: function (){
        console.log("meow i m chuntu ")
    }
}

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// nulls


//
function fee(a,b ,...arr){
  console.log(`the value of a : ${a}`);
  console.log(`the value of a : ${b}`);
  console.log(`the value of a : ${c}`);


}
fee(10,2,1,2,3,4,5,6,7,8,9)