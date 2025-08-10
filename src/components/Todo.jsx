import React, { useState } from 'react'


const Todo = (props) => {
    const [input, setInput] = useState('')

    return (
        <>
            <li>{props.name}</li>
        </>
    )
}

export default Todo