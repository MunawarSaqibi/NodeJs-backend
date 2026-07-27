const express= require("express")

const app = express();

// method - route
app.get("/menu", (request,response)=>{
    console.log("GET request recieved on /menu route")
    response.json({ resName: "Shah Ghouse"})
})

app.post("/menu", (request,response)=>{
    console.log("Posted message")
    response.json({message: "menu added successfully"})
})

app.put("/menu",(request,response)=>{
    console.log("message updated successfully")
    response.json({message: "menu updated successfully"})
})


app.delete("/menu",(request,response)=>{
    response.json({message: "menu deleted successfully"})
})
app.listen("8080",()=>{
    console.log("server is listening on port 8080")
})