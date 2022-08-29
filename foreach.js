const users =[
    {fistname: "muhammmad", loginId: 1},
    {fistname: "Mueen", loginId: 2},
    {fistname: "ali", loginId: 3},
    {fistname: "harshit", loginId: 4},
    {fistname: "gb", loginId: 5},
    {fistname: "muhammmad saad haasn", loginId: 6},
]


// users.forEach((user ,index)=>{
//     console.log(user)
// })


const colors =
[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

// apply foreach for better understaning

// colors.forEach((color)=>{   // basically color is the callback function 
//     console.log(color.value)
// })


//  // apply using the map 

//  colors.map(color=>{
//     console.log(color)
//  })


//  colors.filter(color=>{
//     console.log(color)
//  })


 // task to do print the table of 2 


 const numArray = [1,2,3,4,5,6,7,8,9,10]

 numArray.forEach((number)=>{
	console.log(number*2);
 }) 

colors.forEach(()=>{
	console.log()
})