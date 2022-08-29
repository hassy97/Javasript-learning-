
// callback function 

function myfunc(){
    function hello(){
        return "hello "
    }
    return hello;       // function returning fucntion 
}

const anss = myfunc()
console.log(anss)