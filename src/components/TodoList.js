import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import EditTodoForm from './EditTodoForm';

function TodoList({todos, deleteTask, toggleComp, editTask, updateTask}) {
  return (
      <>
        {todos.map((tasks)=> (
          tasks.isEditing ? (<EditTodoForm updatetask={updateTask} tasks={tasks} key={tasks.id}/>) : 
          (
            <div key={tasks.id} className='todolist'>
                <p onClick={() => toggleComp(tasks.id)}
                className={`${tasks.completed ? 'completed' : ''}`}>
                  {tasks.task}
                </p>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(tasks.id)} />
                    <FontAwesomeIcon icon={faTrash}  onClick={() => deleteTask(tasks.id)} />
                </div>
            </div>
          )
        ))}
      </>
  );
}

export default TodoList;
