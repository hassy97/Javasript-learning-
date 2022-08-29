function iseven(num){
    if(num%2 === 0){
        console.log(`The number ${num} is even `)
    }
    else{
        console.log(`The  number ${num} is odd `)
    }
}

iseven(9);


// const  FindTarget(array,target)=>{
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1; // nothing found 
// }

let arr = [1,23,412,6,2,8,11,22,3,4,5,7]
FindTarget(arr ,9);


const sayHelloGreeting =()=>{
    console.log("hello boie learning JS")
}


// takes only one parameter anyString and return that 
const firstCharName = anyString  => anyString[0]


// other way to write a function declaration 

const fistChar_Name = function(anyString){
    return anyString[0]
}