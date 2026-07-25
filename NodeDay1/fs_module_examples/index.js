const fs= require('fs')
const path=require('path')

const filepath=path.join(__dirname,"example.txt")

// fs.readFileSync(filepath, "utf8",(err,data)=>{
//     console.log(data)
// })

// console.log("Hello World 1")

// const data =fs.readFileSync(filepath,"utf8");
// console.log(data)

// fs.writeFileSync(filepath,"Hello world", (err)=>{
//     console.log("data added.")
// })


fs.writeFileSync(filepath,"Hello Node Js ","utf8")

const oldData=fs.readFileSync(filepath,"utf8")
const content = oldData + "hello world"
fs.writeFileSync(filepath, content)
console.log("data added successfully")
