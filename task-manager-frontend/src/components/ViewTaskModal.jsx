import { useState } from "react";
import { deleteTask } from "../api-functions/taskOperations";

export function ViewTaskModal({task, isViewTaskModalOpened, setIsViewTaskModalOpened, setIsUpdateTaskModalOpened, getTasks}) {
  if(!isViewTaskModalOpened) return null;
  const [isLoading, setIsLoading] = useState(false);
  

  const handleDelete = async() => {
    setIsLoading(true);
    await deleteTask(task.id);
    await getTasks();
    setIsLoading(false);
    setIsViewTaskModalOpened(false)
  }

  const getUpdateModal = () => {
    setIsViewTaskModalOpened(false);
    setIsUpdateTaskModalOpened(true);
  }
    return(
        <div
      onClick={() => setIsViewTaskModalOpened(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? <div className="loader"></div> : <div
        style={{
          background: "grey",
          width: 240,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>Title: {task.title}</div>
        <div>Description: {task.description}</div>
        <div>Status: {task.status}</div>
        <div>
            <button onClick={getUpdateModal}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
      </div>}
    </div>
    );
}