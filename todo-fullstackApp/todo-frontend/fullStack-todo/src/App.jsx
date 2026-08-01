import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoBox from './components/TodoBox'
import useFetchTodo from './utils/useFetchTodo'

function App() {
  const [input, setInput] = useState("")

  let todoList = useFetchTodo()

  async function submitFunc(){
    const response = await fetch("http://localhost:8080/todo" ,{
      method: "POST",

      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "todo": input
      }),
    
    });

     const data=await response.json();
      console.log(data)

  }

  if (todo==null){
    return <div>Loading...</div>
  }
  return (
    <div>
       <h1>Todo Apllications</h1>
    <input 
    type="text"
    placeholder={"Enter Todo Value"} 
    value={input}
    onChange={(e)=>{
      setInput(e.target.value);
    }}
    />

  <button
  onClick={()=>{
    submitFunc();
  }}>Add Todo</button>

  {todoList.map((todo)=>{
    return <TodoBox details={todo} key={todo}/>
  })}
    </div>
   
    
  )
}

export default App
