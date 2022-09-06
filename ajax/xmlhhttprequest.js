const xhr = new  XMLHttpRequest()
URL = "https://jsonplaceholder.typicode.com/posts"

// console.log(xhr)
// console.log(xhr.readyState);

xhr.open("get", URL);

// console.log(xhr.readyState);  

xhr.onreadystatechange =function (){
    if (xhr.readyState === 4) {
        const response1 = xhr.response;
        const data = JSON.parse(response1);
        console.log(data)
    }
}

xhr.send() 