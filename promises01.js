function  maketea(){
    const bucket = ['sugar','coffee','milk', 'water']
    return new Promise((resolve,reject)=>{
        if(bucket.includes('water') && bucket.includes('sugar') && bucket.includes('milk')){
            resolve({value : "tea is ready"})
        }
        else{
            reject("can't make tea something is missing")
        }
    })
}


// how to call the promises

// in then we resolve the promise sometime we need only one situation and sometimes we catch error by ' catch '
maketea().then(
    (mytea)=>{
        console.log('lets drink ', mytea)

}).catch((error)=>{
    console.log(error)
})