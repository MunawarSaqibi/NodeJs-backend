const fs=require('fs')
const path=require('path')

const { program }=require("commander");

const filepath=path.join(__dirname, "todo.json");



//CRUD- Create 
const addTodo=(new_todo)=>{
   const data = fs.readFileSync(filepath,"utf8");
   const todoArr= JSON.parse(data);
   todoArr.push(new_todo);

   fs.writeFileSync(filepath,JSON.stringify(todoArr),"utf8");
   console.log("Todo Added Successfully", new_todo);
}

// CRUD-Read
const printTodo=()=>{
    const data = fs.readFileSync(filepath,"utf8");
    console.log(data)
}

//CRUD- update

const updateTodo=(existing_todo, new_todo)=>{
   const data = fs.readFileSync(filepath,"utf8");
   const todoArr= JSON.parse(data);

   let deleteElementIndex=0;

   const filterTodo=todoArr.filter((todo,index)=>{
    if(todo.toLowerCase() == existing_todo.toLowerCase()){
        deleteElementIndex= index;
        return false
    }else{
        return true
    }
   })

filterTodo.splice(deleteElementIndex,0,new_todo);

fs.writeFileSync(filepath,JSON.stringify(filterTodo), "utf8");
console.log("Todo updated from", existing_todo,"to", new_todo )


};

//CRUD - delete

const deleteTodo=(todo_value)=>{
  const data = fs.readFileSync(filepath, "utf8");
  const todoArr = JSON.parse(data);

  const filterTodo=todoArr.filter((todo)=>{
    if(todo.toLowerCase() == todo_value.toLowerCase()){
        return false
    }else{
        return true
    }
})

 fs.writeFileSync(filepath,JSON.stringify(filterTodo),"utf8");
console.log("Todo Deleted Successfully", todo_value);
};

program
.name("Todo")
.description("CLI based persistent simple Todo Application")
.version("1.0.0");

program
.command("print")
.description("Print all todos from your todo list")
.action(()=>{
    printTodo();
});

program
.command("add")
.description("Add a new todo to your todo list")
.argument("<new_todo>","argument to take a new todo from user")
.action((new_todo)=>{
    addTodo(new_todo)
});

program
.command("update")
.description("update a new todo with existing todo ")
.argument("<existing_todo>","remove existing")
.argument("<new_todo>","add new")
.action((existing_todo,new_todo)=>{
    updateTodo(existing_todo,new_todo)
});


program
.command("delete")
.description("delets a todo existing in your todo list")
.argument("<new_todo>","argument to take which todo to be deleted")
.action((todo_value)=>{
    deleteTodo(todo_value);
});


program.parse()