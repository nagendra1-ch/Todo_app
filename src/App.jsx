import { useState } from "react"
import React, { useEffect } from 'react'
import Todo from './components/Todo'

const App = () => {
  const [inp,setInp]=useState("")
  const [todos,setTodos]=useState(()=>{
    const savedTodos=localStorage.getItem("todos")
    return savedTodos? JSON.parse(savedTodos):[]
  })
  const addtodo=(e)=>{
    e.preventDefault()
    setTodos([...todos,inp])
    console.log(todos)
  }
  const deleting=(key)=>{
    todos.shift(key,1)
    setTodos(todos)
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos))},[todos])
    return (
      <div> 
        <form onSubmit={addtodo}>
          <input type='text' placeholder='Enter Todo' onChange={(e)=>setInp(e.target.value)}/>
          <button type='submit'>Add Todo</button>
        </form>
        <ul>
          {
            todos.map((todo,index)=>(
              <li key={index}>{todo} <button onClick={()=>{deleting({index})}} >Delete</button></li>
            ))
          }
        </ul>

      </div>
    )
}

export default App