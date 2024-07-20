from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from crud.task_operations import add_task, get_all_tasks, task_update, task_delete
from task_schemas import CreateTaskType, UpdateTaskType
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

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
    
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=False)




