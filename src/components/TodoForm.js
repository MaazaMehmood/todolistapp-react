import React, { useState } from 'react';


function TodoForm({addTodo}) {

    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();  // by default when submit fires the page reloads,so it prevents the page to reload.
        if (value !== '') {addTodo(value)}
        setValue("");
    }

    return (
        <form className='todoform' onSubmit={handleSubmit}>
            <input type='text' className='todo-inp'  
              placeholder=' What is the task today? ' value={value}
              onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
}

export default TodoForm;
