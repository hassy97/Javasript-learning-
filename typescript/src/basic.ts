let number:number = 123
let name1 = "hassy "; // here automatically infer the datatypes

let is_bool =true  // here automatically inference  the datatypes


let list: any  =[1,"male",23, "student"]

console.log(list)


/// catch legitimate  bugs


const announcement = "Hello World!";
// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
// We probably meant to write this.

announcement.toLocaleLowerCase();
