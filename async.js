


    function helloasync(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("hello world in the async function")
            }, 2000)
        })
    }

    async function helloworld(){
        console.log(await helloasync() )
    }

    //calling way 


    console.log('Before')
    helloworld()
    console.log('After')