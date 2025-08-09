import { useState } from 'react'
import './App.css'

function App() {
    const [input, setInput] = useState('')
    const [todos,setTodos]=useState([])
    
    const addTodo = (e) => {
        e.preventDefault()  
        setInput(e.target.value)
        console.log(input)
        let newtodos=[...todos,input]
        setTodos(newtodos)
        localStorage.setItem("todo",JSON.stringify(todos))
        console.log(todos)
        setInput('')
    }

    return (
      <>
        <h2 style={{ textAlign: 'center' }}>Todo Application</h2>
        <form onSubmit={addTodo}>
            <input
                type="text"  placeholder='Enter Todo' value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button type="submit">Add Todo</button>
        </form>
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      </>
    )
}

export default App

