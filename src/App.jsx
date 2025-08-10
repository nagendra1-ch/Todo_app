import { useState } from "react"
import React, { useEffect } from 'react'
import Todo from './components/Todo'
import "./styles/checkList.css"

const App = () => {
  const [inp,setInp]=useState("")
  const [todos,setTodos]=useState(()=>{
    const savedTodos=localStorage.getItem("todos")
    return savedTodos? JSON.parse(savedTodos):[]
  })
  const [checkList,setCheckList]=useState(()=>{
    const savedTodos=localStorage.getItem("checkList")
    return savedTodos? JSON.parse(savedTodos):[]
  })
  const addtodo=(e)=>{
    e.preventDefault()
    if (inp.trim() === "") return;
    setTodos([...todos,inp])
    setCheckList([...checkList,false])
    console.log(todos)
  }
  const deleting=(index)=>{
    const newTodos = todos.filter((_, i) => i !== index)
    const newcheck=checkList.filter((_,i)=>i!==index)
    setTodos(newTodos)
    setCheckList(newcheck)
  }

  const checkPending=(index)=>{
    const newList=checkList.map((val,i)=> i===index?!val:val)
    setCheckList(newList)
  }

  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos));localStorage.setItem("checkList",JSON.stringify(checkList))},[todos,checkList])
    return (
      <center>
      <div> 
        <h2 style={{textAlign:"center"}}>Todo Application</h2>
        <form  onSubmit={addtodo}>
          <input type='text' placeholder='Enter Todo' onChange={(e)=>setInp(e.target.value)}/>
          <button type='submit'>Add Todo</button>
        </form>


        {/* displaying todos */}
        <table className="table">
          {
            todos.map((todo,index)=>(<tr className={checkList[index]?"Completed":"Pending"}>
              <td key={index}  >{todo}</td><td> <button onClick={()=>{checkPending(index)}} > {checkList[index]?"Completed":"Pending"} </button></td> <td> <button onClick={()=>{deleting(index)}} >Delete</button></td>
            </tr>))
          }
        </table>
        </div>
        </center>
      
    )
}

export default App

