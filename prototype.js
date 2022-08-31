function hello(){
    console.log("hello")
}

if (hello.prototype) {
    console.log("prototype is present")
} else {
    console.log("prototype is not  present")
}


hello.prototype.firstname = "Muhammad";
hello.prototype.lastname = "Hassan";

hello.prototype.age = 23;

console.log(hello.prototype)