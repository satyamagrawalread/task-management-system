from fastapi import FastAPI, HTTPException
from crud.task_operations import add_task, get_all_tasks, task_update, task_delete
from task_schemas import CreateTaskType, UpdateTaskType
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/tasks")
async def retrieve_tasks():
    try:
        result = get_all_tasks()
        return {"data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Something went wrong")

@app.post("/api/tasks")
async def create_task(task: CreateTaskType):
    try:
        add_task(task)
        return {"message": "Task Created"}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Something went wrong")

@app.put("/api/tasks/{task_id}")
async def update_task(task_id: int, task: UpdateTaskType):
    try:
        task_update(task_id, task)
        return {"message": "Task Updated"}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Something went wrong")

@app.delete("/api/tasks/{task_id}")
async def delete_task(task_id: int):
    try:
        task_delete(task_id)
        return {"message": "Task Deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Something went wrong")




