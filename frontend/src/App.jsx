import TaskForm from "./components/Taskform.jsx";
import TaskList from './components/TaskList.jsx';
import "./styles/global.css";

function App() {
  return (
    <div className="container">
      <h1>Task Management System</h1>
      <TaskForm refresh={()=>window.location.reload()}/>
      <TaskList />
    </div>
  );
}

export default App;
