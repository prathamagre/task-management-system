import {useState} from "react";
import axios from "../api/axios";

const TaskForm = ({ refresh})=>{
    const [task, setask1] = useState({
        title:"",
        description:"",
        sueDate:"",
        priority:"Medium"
    });

    const submitHandler = async (e)=>{
        e.preventDefault();
        await axios.post("/tasks", task);
        refresh();
        setTask({ title:"", description:"", dueDates:"", priority:"Medium,"});
    };

    return(
        <form onSubmit = {submitHandler}>
            <h3>Create Task</h3>
            <input placeholder="Title" required
            value={task.title}
            onChange={e => setTask({ ...task, title: e.target.value})}></input>
            <textarea placeholder="Description"
            onChange={e=>{setTask({...task, description: e.target.value})}}></textarea>
            <input placeholder="Due Date" type="date"
            onChange={e=>{setTask({...task, dueDate: e.target.value})}}></input>
            <select 
            onChange={e=>{setTask({...task, priority: e.target.value})}}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button>Add Task</button>
        </form>
    );
};

export default TaskForm;