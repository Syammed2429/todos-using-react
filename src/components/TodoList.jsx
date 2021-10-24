import React from "react";
import {nanoid} from "nanoid";



let TodoList = ({addTodo}) => {
    const [input, setInput] = React.useState("")

    const handleChange = (e) => {
        setInput(e.target.value)

    }

    const handleAdd = () => {
        if(input === "" ) {
            return alert("Please enter a list name")
        }
        const data = {
            id : nanoid(4),
            title : input,
            status : false,
        }
        addTodo(data)
        setInput("")
    }
    
    return (
        <>
            <h2 className="h2 text-uppercase text-info">Todo List</h2>
            <input
                className="form-control col-2 container mt-3"
                value={input} 
                type="text" 
                placeholder="Write Something..."  
                onChange={handleChange} />
            <button
                className="container col-2 btn btn-primary" 
                onClick={handleAdd}>Add Todo</button>
            
            
            
            
        </>
    );
}


export default TodoList