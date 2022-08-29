let bandInfo = "Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers, most notably Chad Channing, before recruiting Dave Grohl in 1990.";


const favband = {
    name: "nirvana",
    nationality: "USA",
    genre: ["rock", "pop", " harde rock"],
    members: 12,
    formed:1987,
    split:1994,
    // array representing the albums released by the band. Each array item should be an object  
    albums:[
        {
            name:"nevermind",
            released:1991
        },

        {
            name:"In Utero",
            released:1993
        },

        {
            name:"Bleach",
            released:1989
        },

        {
            name: "Smells Best",
            released:1998,
            members : ["AMK SD","JOHN","Mike"]
        },


    ]

}


// how to destructing the objects 

// const  {released:asbc ,...rest} = favband.albums[3]
// console.log(rest)


// use map to understand better 

favband.albums.map((band)=>{
    console.log(band)
})
