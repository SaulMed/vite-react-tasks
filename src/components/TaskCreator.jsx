import { useState } from 'react'

export const TaskCreator = ({createTask}) => {

    /* console.log(props) */

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(task);
        localStorage.setItem("tasks", task);
        setTask('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                required
                placeholder="Enter a new task"
                value={task}
                onChange={
                    (e) => setTask(e.target.value)
                } />
            <button className="btn-success">Save Task</button>
        </form>
    )


}