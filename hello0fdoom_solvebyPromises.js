//then method hamesha se humae return main promise de ga 



const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color,time, ){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color =color;
                resolve();
               
            }
            else{
        
                reject("your element doesn't exist ");
            }
        },time)
    })
    
}

const returnPromise = changeText(heading1,"one","blue",1000)
returnPromise.then(()=>{
    return changeText(heading2,"two","purple",2000)
})
.then(()=>{
    return changeText(heading3,"three","green",2000)
})

.then(()=>{
    return changeText(heading4,"four","yellow",2000)
})

.then(()=>{
    return changeText(heading5,"five","red",2000)
})

.then(()=>{
    return changeText(heading6,"sex","orange",2000)
})


.then(()=>{
    return changeText(heading7,"seven","purple",2000)
})

