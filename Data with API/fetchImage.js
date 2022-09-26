/**
 * call the fetch request 
 * http resopne in the variable
 * then return a blob 
 * blob convert into DOm element 
 *
 */

async function catchImage(){
    const response = await fetch('rainbow.jpg')
    const blob = await response.blob()
    document.getElementById(rainbow).src =URL.createObjectURL(blob);
}

catchImage()
.catch(error=>{
    console.log(error)
})