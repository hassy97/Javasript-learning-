let numarr = [1,2,3,4,5,5]

// aim : sum of all number in numarr
const sum_arr = numarr.reduce((accumulator , currentvalue)=>{
    return accumulator + currentvalue
})

// accumulator   currentvalue  return
// 1             2             3
// 3             3             6
// 6             4             10
// 10            5              15
// 15            5              20


console.log(sum_arr)

const products = [
    {productID: 1, productName: "Mobile", price: 25000},
    {productID: 2, productName: "iphone", price: 250000},
    {productID: 3, productName: "watch", price: 12000},
    {productID: 4, productName: "laptop", price: 50000},
    {productID: 5, productName: "Bike", price: 160000},
    {productID: 6, productName: "Macbook", price: 150000}

]


// aim : calculate total price of all products

const  totalPrice = products.reduce((totalprice ,currentvalue)=>{
    return totalprice + currentvalue.price
}, 0)

console.log(`the total price of all products are ${totalPrice}`)