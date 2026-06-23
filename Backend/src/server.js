import express from "express"; 

const app = express();

app.get( '/' , ( req , res ) => {
    res.send("Salom berdik")
    console.log(req)
})

app.listen( 8800 , () => {
    console.log("http://localhost:8800")
})