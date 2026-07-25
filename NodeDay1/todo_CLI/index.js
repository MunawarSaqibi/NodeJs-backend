const fs=require('fs')
const path=require('path')

const filepath=path.join(__dirname, "todo.json");

const printTodo=()=>{
    const data = fs.readFileSync(filepath,"utf8");
    console.log(data)
}

const addTodo=(new_todo)=>{
   const data = fs.readFileSync(filepath,"utf8");
   const todoArr= JSON.parse(data);
   todoArr.push(new_todo);

   fs.writeFileSync(filepath,JSON.stringify(todoArr),"utf8");
   console.log("Todo Added Successfully");
}

printTodo()

addTodo("go to market")
printTodo()