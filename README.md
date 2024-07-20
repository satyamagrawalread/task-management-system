## Task Management System
An application which performs CRUD operation on tasks.

# Frontend
cd task-manager-Frontend

npm install

npm run dev

# Backend
Open Git Bash Terminal

### Activate Virtual Environment Command:
source ./backend/venv/Scripts/activate

### Start the backend server command:
uvicorn backend.main:app --port 8080 --reload

## Assumptions:
Title must not be Empty
Status will be todo by default in case no status is provided