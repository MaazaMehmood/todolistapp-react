import React, {useState} from 'react'

function EditTodoForm({updatetask, tasks}) {
    const [value, setValue] = useState(tasks.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        updatetask(value, tasks.id);
        setValue("");
    }

  return (
    <form onSubmit={handleSubmit} className="todoform">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-inp" 
    placeholder='Update task' />
    <button type="submit" className='todo-btn'>update Task</button>
  </form>
  )
}

export default EditTodoForm;