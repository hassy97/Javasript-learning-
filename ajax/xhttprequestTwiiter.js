// const xhttpreq = new XMLHttpRequest();

URL = "https://jsonplaceholder.typicode.com/posts"
function sendRequest(method, url){
    return new Promise((resolve,rejecet)=>{
        const xhttreq = new XMLHttpRequest();
       // URL = "https://jsonplaceholder.typicode.com/comments?postId=1"
        xhttreq.open("get",URL,true)

        xhttreq.onload = function (){
            if(xhttreq.status >= 200 &&  xhttreq.status < 300 ){
                resolve(xhttreq.response)
            }
            else{
                rejecet(new Error("something went wrong"))
            }
        }

        xhttreq.onerror = function (){
            console.log("networking errors")
        }

        xhttreq.send();


    })
}

sendRequest("get", URL)
    .then((response)=>{
        // console.log(response)
        // parse the data into the JSOn objects
        const data = JSON.parse(response)
        console.log(data)

    })