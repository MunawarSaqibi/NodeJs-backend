const express=require("express")




const app=express()

let todoArr = ["go to GYM"]

app.use(express.json());

app.get("/todo", (req,res)=>{
    console.log("Get")
    res.json({
        data: todoArr
    })
})

app.post("/todo",(req,res)=>{
    const newTodo= req.body.todo
    todoArr.push(newTodo);
    console.log("post done")
    res.json({
        message: "todo recieved and added successfully"
    })
})

app.put("/todo",(req,res)=>{

    res.json({
        message: "todo updated successfully"
    })
})


const PORT = 8080;
app.listen(PORT,()=>{
    console.log("server is running on the port", PORT)
})