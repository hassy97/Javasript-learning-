
// a make an HTTP request to the server fo this we need a  instance of an object with the necessary functionality.
(() => {

    let httpRequest;    // make a varaible 

    // add an event 'click' when we click it will send a request by using a handler makeRequest
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);


    // this function make a new object 
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
    
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
        }



        // After making a request, you will receive a response back. At this stage, you need to tell the XMLHttp request object which JavaScript function will
        //  handle the response, by setting the onreadystatechange property of the object 
        httpRequest.onreadystatechange = alertContents;

        httpRequest.open('GET', 'test.html');
        httpRequest.send();
        }

    function alertContents() {
// ready state 


// 0 (uninitialized) or (request not initialized)
// 1 (loading) or (server connection established)
// 2 (loaded) or (request received)
// 3 (interactive) or (processing request)
// 4 (complete) or (request finished and response is ready)


    if (httpRequest.readyState === XMLHttpRequest.DONE) 
    {
        if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
        } 
    else {
        alert('There was a problem with the request.');
        }
    }
}
})();