import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTaskModal } from "./components/CreateTaskModal";
import { createTask, retrieveTask } from "./api-functions/taskOperations";
import { ViewTaskModal } from "./components/ViewTaskModal";
import { UpdateTaskModal } from "./components/UpdateTaskModal";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isViewTaskModalOpened, setIsViewTaskModalOpened] = useState(false);
  const [isUpdateTaskModalOpened, setIsUpdateTaskModalOpened] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTasks();
  }, [])
  useEffect(() => {
  }, [tasks])

  const getTasks = async () => {
    const result = await retrieveTask();
    setIsLoading(false);
    setTasks(result.data);
  }
  const handleSelect = (task) => {
    setSelectedTask(task);
    setIsViewTaskModalOpened(true);
  }
  return (
    <>
      <button onClick={() => setIsModalOpened(true)}>Create Task</button>
      <CreateTaskModal
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened} getTasks={getTasks} />
      <ViewTaskModal task={selectedTask} isViewTaskModalOpened={isViewTaskModalOpened} setIsViewTaskModalOpened={setIsViewTaskModalOpened} setTasks={setTasks} getTasks={getTasks} setIsUpdateTaskModalOpened={setIsUpdateTaskModalOpened} />
      <UpdateTaskModal task={selectedTask} isUpdateTaskModalOpened={isUpdateTaskModalOpened} setIsUpdateTaskModalOpened={setIsUpdateTaskModalOpened} getTasks={getTasks} />
      {isLoading ? <div className="task-loader"><div className="loader"></div></div> : tasks.map((task, index) => (
        <div key={index}>
        
        <div className="task-item" onClick={() => handleSelect(task)}>{task.title}</div></div>
      ))}
    </>
  );
}

export default App;
