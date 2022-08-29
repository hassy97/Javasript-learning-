
// every method always return in boolean 

const products = [
    {productID: 1, productName: "Mobile", price: 25000},
    {productID: 2, productName: "iphone", price: 250000},
    {productID: 3, productName: "watch", price: 12000},
    {productID: 4, productName: "laptop", price: 50000},
    {productID: 5, productName: "Bike", price: 160000},
    {productID: 6, productName: "Macbook", price: 150000}

]

// using the every method 
// price of elements are less than 300000

const  x = products.every((product)=>{
    return product.price <= 300000
})


console.log(`price of elements are less than 300000 ${x}`)


// for of loop 
// const name1111= "Muhammad Hassan"

// for (const iterator of name1111) {
//     console.log(iterator)
// }


//make a set of numbers

const setofEven = new Set([2,4,6,8,10,12,14,16,18])


console.log(setofEven)
