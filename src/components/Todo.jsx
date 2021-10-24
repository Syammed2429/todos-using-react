
import React from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";



let Todo = () => {
    const [todoList, settodoList] = React.useState([])
    const handleAdd = (data) => {
        settodoList([...todoList, data])
    }
    return (
        <>
            <TodoList addTodo={handleAdd}/>
            <TodoItem list={todoList}/>
        </>
    );
}

export default Todo