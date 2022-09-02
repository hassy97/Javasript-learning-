const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// callback hell thats why we use promises
// setTimeout(() => {
//     heading1.textContent = "One"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//              setTimeout(() => {
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
//                     setTimeout(() => {
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue"
//                         setTimeout(() => {
//                             heading7.textContent = "severn"
//                             heading7.style.color = "brown"
//                         }, 10000); 


//                     }, 3000);  
                    
//                 }, 2000);              
//             }, 1000); 
            
//         }, 2000); 

//     }, 
    
//     2000); 
// }, 1000); 











function changeText(element, text, color,time, onSuccesscallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color =color;
            if(onSuccesscallback){
                onSuccesscallback()
            } else{
                if(onFailureCallback){
                    onFailureCallback( )
                }
            }
           
        }
        else{
            console.log("your element doesn't exist ")
        }
    },1000)
}


// 4 parameters are passes and  2 callback function are pased

// pyramid of doom in the callback functions
changeText(heading1,"one","violet",1000, ()=>{
    changeText(heading2,"two","purple",2000, ()=>{
        changeText(heading3,"three","green",3000, ()=>{
            changeText(heading4,"four","red",4000, ()=>{
                changeText(heading5,"five","violet",1000, ()=>{
                    changeText(heading6,"one","violet",1000, ()=>{
                        changeText(heading7,"one","violet",1000, ()=>{

                        }, ()=>{console.log("heading7  does not exsits")}):
                    }, ()=>{console.log("heading6 does not exsits")}):
                }, ()=>{console.log("heading5 does not exsits")}):
            }, ()=>{console.log("heading4 does not exsits")}):
        }, ()=>{console.log("heading3 does not exsits")}):
    }, ()=>{console.log("heading2 does not exsits")}):

}, ()=>{console.log("heading1 does not exsits")}):