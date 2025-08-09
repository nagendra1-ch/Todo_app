import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState('')

    const addTodo = (e) => {
        e.preventDefault()
        console.log(input)
        setInput('')
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Enter Todo'   onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}

export default Todo