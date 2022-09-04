// promises handle asynchronous operations

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


console.log('code start form here')
const bucket = ['sugar','coffee','milk']

// how to produce promises and when to cousume 

const tea_promise = new Promise((resolve, reject)=>{
if(bucket.includes('sugar') && bucket.includes('water') && bucket.includes('milk')){
    resolve(console.log('tea is ready '))
}
else{
    reject("couldn't make a tea ")
}


})


// consume the promise here 


// when promise is resolve  this code run 
tea_promise.then(
    (mytea)=>{
        console.log('lets drink',mytea)

//         when promise is reject this code run 

}).catch((error)=>{
console.log(error)
})


for(let i =0; i <100 ; i++){
    console.log(Math.random(), i)
}



console.log('code end here')