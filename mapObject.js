// map objects are the array like iterable, key value pairs 
const emplopyee = new Map()

emplopyee.set('firstname','Muhammad Hassan')
emplopyee.set('age', 23)
emplopyee.set('job','Intern')

// apply the for of 

for (let key of emplopyee.keys()) {
    console.log(key)
}

// apply for of loop method 
console.log('-----------------------------------------------')

for (let [key, value] of emplopyee) {
    console.log(key,value)
    
}


console.log('-----------------------------------------------')
// how to acces in the mapObjects
console.log(emplopyee.get('firstname'))
console.log('-----------------------------------------------')

console.log('-----------------------------------------------')
console.log('-----------------------------------------------')


function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }



new Map([['foo', 3], ['bar', {}], ['baz', 'pingpong']])
.forEach(logMapElements);



// object using mapObject


const person = {
    firstname: "Muahmmad",
    lastname:"Hassan",
    age:23
}


const userInfo = new Map();
// Object {Object => Object}
userInfo.set(person,{job:"intership",gender: "male"})

console.log(Array.isArray(person))