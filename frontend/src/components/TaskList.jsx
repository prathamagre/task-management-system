import { useEffect, useState } from "react";
import axios from "../api/axios";
import TaskCard from "./TaskCard";

const TaskList = ()=>{
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);

    const fetctchTasks = async ()=>{
        const res = await axios.get(`/tasks?page=${page}`);
        setTasks(res.data.tasks);
    };

    useEffect(()=>{
        fetctchTasks();
    }, [page]);

    return(
        <div>
            {tasks.map(task=>(
                <TaskCard key={task._id} task={task} refresh={fetctchTasks} />
            ))}
            <button onClick={()=> setPage(p=>Math.max(p-1, 1))}>Previous</button>
            <button onClick={()=> setPage(p=>p+1)}>Next</button>
        </div>
    );
};

export default TaskList;