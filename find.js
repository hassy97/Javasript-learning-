
const products = [
    {productID: 1, productName: "Mobile", price: 25000},
    {productID: 2, productName: "iphone", price: 250000},
    {productID: 3, productName: "watch", price: 12000},
    {productID: 4, productName: "laptop", price: 50000},
    {productID: 5, productName: "Bike", price: 160000},
    {productID: 6, productName: "Macbook", price: 150000}

]


 // find method in JS


 const lowestpirce = products.find((product)=>{
    return product.price <= 20000
 })


 console.log("lowest price in the product list ") 

 console.log(lowestpirce)