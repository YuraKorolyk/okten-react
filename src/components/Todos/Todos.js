import React, {useEffect, useState} from 'react';
import {placeholderService} from "../../services/placeholder.service";
import Todo from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState(null)
    useEffect(()=> {
        placeholderService.getTodos()
            .then(res => res.data)
            .then(res => setTodos(res))

    }, [])
    return (
        <div>
            <h2>Todos</h2>
            {todos?.map(todo=> <Todo key={todo.id} data={todo}/>)}
        </div>
    );
};

export default Todos;