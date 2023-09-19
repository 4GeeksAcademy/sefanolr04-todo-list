
import React, { useState } from 'react';

function App() {
    const [task, setTask] = useState('');       // Estado para el valor actual del input
    const [tasksList, setTasksList] = useState([]); // Estado para la lista de tareas

    const handleAddTask = (event) => {
        if (task && event.key == "Enter") {
            setTasksList([...tasksList, task]); // Añade la tarea actual a la lista
            setTask('');                        // Limpia el input
        }
    };

    const taskChange = (event) => {
        setTask(event.target.value)
    }

    const deleteTask = (index) => {
        const newList = tasksList.filter((value, i) => i !== index)
        setTasksList(newList)
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className='title'>Todo List</h1>
                <div className='col-12 p-0'>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nueva tarea"
                        value={task}
                        onChange={e => taskChange(e)}
                        onKeyUp={e => handleAddTask(e)}
                    />
                </div>
                <ul className="list-group col-12 p-0">
                    {tasksList.map((task, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between">
                            <span>{task}</span>
                            <button
                                onClick={e => deleteTask(index)}
                                style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
                            >
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </li>
                    ))}
                </ul>
                {tasksList.length > 0 ? (
                    <div>
                        {tasksList.length} item{tasksList.length === 1 ? '' : 's'} left
                    </div>
                ) : (
                    <div>
                        No hay tareas, añadir tareas
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;