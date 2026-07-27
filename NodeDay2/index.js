const express= require("express")

const app = express();

app.get("/menu", (request,response)=>{
    console.log("GET request recieved on /menu route")
    response.send("your request recevied , you will get response soon")
})

app.listen("8080",()=>{
    console.log("server is listening on port 8080")
})