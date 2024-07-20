import { useEffect, useState } from "react";
import "../styles/modal.css";
import { createTask, updateTask } from "../api-functions/taskOperations";

export const UpdateTaskModal = ({
    task,
  isUpdateTaskModalOpened,
  setIsUpdateTaskModalOpened,
  getTasks
}) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(task) {
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
    }
  }, [task]);

  const handleUpdateTask = async () => {
    const details = {
      title: title,
      description: description,
      status: status,
    };
    setIsLoading(true);
    const result = await updateTask(task.id, details);
    if (result && result.message) {
        // console.log("Task Updated Successfully");
        setTitle("");
        setDescription("");
        setStatus("");
        await getTasks();
    }
    setIsLoading(false);
    setIsUpdateTaskModalOpened(false);
  };

  if (!isUpdateTaskModalOpened) return null;

  return (
    <div
      onClick={() => setIsUpdateTaskModalOpened(false)}
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
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div
          style={{
            background: "white",
            width: 240,
            margin: "auto",
            padding: "2%",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: "2px solid black",
            color: "black",
            fontWeight: "bold",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="create-task">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select status</option>
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button onClick={handleUpdateTask} disabled={!title}>
              Update Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
