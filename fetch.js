// the Fetch API uses Promises, which enables a simpler and cleaner API,
// avoiding callback hell and having to remember the complex API of XMLHttpReques

URL = "https://jsonplaceholder.typicode.com/posts"
fetch(URL)

.then(response =>{
    console.log(response)
    return response.json()
}).then(data=>{
    console.log(data)
}).catch(error => {
    console.log("inside catch")
    console.log(error)
})