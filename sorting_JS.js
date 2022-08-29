// sorting in javascript on the basis of the ACCI characters

const products = [
    {productID: 1, productName: "Mobile", price: 25000},
    {productID: 2, productName: "iphone", price: 250000},
    {productID: 3, productName: "watch", price: 12000},
    {productID: 4, productName: "laptop", price: 50000},
    {productID: 5, productName: "Bike", price: 160000},
    {productID: 6, productName: "Macbook", price: 150000}

]

const lowToHight = products.sort((a,b)=>{
    return a.price - b.price
})


console.log(lowToHight)
 // high to low products 

 const highToLow = products.sort((a,b)=>{
    return b.price - a.price
 })

 console.log("High to Low prices ") 
 console.log(highToLow)



 console.log(products)

