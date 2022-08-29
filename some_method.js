

const products = [
    {productID: 1, productName: "Mobile", price: 25000},
    {productID: 2, productName: "iphone", price: 250000},
    {productID: 3, productName: "watch", price: 12000},
    {productID: 4, productName: "laptop", price: 50000},
    {productID: 5, productName: "Bike", price: 160000},
    {productID: 6, productName: "Macbook", price: 150000}

]

// how to use some method
// somne  of elements are greater than 100000




const somePrice = products.some((product)=>{
    return product.price > 100000
})

console.log(`somne  of elements are greater than 100000 ${somePrice}`)