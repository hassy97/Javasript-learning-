console.log("script start")
URL = "https://jsonplaceholder.typicode.com/posts"
async function getPosts(){
   const response  =await fetch(URL)
   console.log(response)
}

getPosts();

console.log("script end")