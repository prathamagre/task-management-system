import axios from 'axios';
import "../styles/priority.css";

const TaskCard = ({task, refresh})=>{
    return(
        <div className={`task ${task.priority.toLowerCase()} ${task.status === "Completed" ? "completed": ""}`}>
            <h4>{task.title}</h4>
            <p>Due; {task.dueDate.slice(0,10)}</p>

            <select 
            value={task.status}
            onChange={async (e)=>{
                axios.patch(`/tasks/${task._id}/status`, { status: e.target.value });
                refresh();
            }}>
                <option>Pending</option>
                <option>Completed</option>
            </select>

            <select 
            value={task.priority}
            onChange={e=>{
                axios.patch(`/tasks/${task._id}/priority`, { priority: e.target.value });
                refresh();
            }}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        </div>
    );
};

export default TaskCard;