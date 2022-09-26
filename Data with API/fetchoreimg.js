
const arrayImages =[
    './img/daniele-levis-pelusi-311027-unsplash.jpg',
    './img/Image_created_with_a_mobile_phone.png',
    './img/rainbow.jpg',
    './img/pixel.jpeg'


];

/**
 * 
 * @param {*} catchMoreimage 
 * 
 */

async function catchMoreimage(catchMoreimage){

    console.log('more images fetch')

    for (let arrImage of arrayImages) {
        const response = await fetch(arrImage);
        const blob  = await response.blob();
        const img = document.createElement('img');
        img.src =URL.createObjectURL(blob)
        img.width = '190'
        document.getElementById(img);

        document.body.append(img);
        console.log(response)
        
    }
   
    
}

catchMoreimage(arrayImages)

.then(response =>{
    console.log('ho gya')
})


.catch(error =>{
    console.log(error)
})