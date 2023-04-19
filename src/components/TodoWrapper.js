import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
uuidv4();

function TodoWrapper() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}])
    }

    const toggleComplete = (id) => {
        const comp = todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(comp);
    }

    const handleDelete = (id) => {
        const delTask = todos.filter(todos => todos.id !== id);
        setTodos(delTask);
    }

    const handleEdit = (id) => {
        const edit = todos.map( todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo);
        setTodos(edit);
    }

    const updateTask = (task, id) => {
        const update = todos.map( todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(update);
    }

  return (
    <>
    <h1>TODO LIST</h1>
    <div className='todowrapper'>
        <h3>getting things done!</h3>
        <TodoForm addTodo={addTodo} />
        <TodoList  todos={todos} deleteTask={handleDelete} toggleComp={toggleComplete} editTask={handleEdit} updateTask={updateTask}/>
    </div>
    </>
  );
}

export default TodoWrapper;
