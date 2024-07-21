from fastapi import HTTPException
from sqlalchemy import select
from database.task_database import Session
from task_models import Task


def add_task(item):
    try:
        session = Session()
        new_task = Task(title=item.title, description=item.description, status=item.status)
        session.add(new_task)
        session.commit()
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=500, detail=f"Error adding task: {e}")
    finally:
        session.close()

def get_all_tasks():
    try:
        session = Session()
        result = session.query(Task).all()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving tasks: {e}")
    finally:
        session.close()

def task_update(task_id, item):
    try:
        session = Session()
        stmt = select(Task).where(Task.id == task_id)
        task_with_id = session.scalars(stmt).one()
        if(item.title):
            task_with_id.title = item.title
        if(item.description):
            task_with_id.description = item.description
        if(item.status):
            task_with_id.status = item.status
        session.commit()
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=500, detail=f"Error updating tasks: {e}")
    finally:
        session.close()

def task_delete(task_id):
    try:
        session = Session()
        stmt = select(Task).where(Task.id == task_id)
        task_with_id = session.scalars(stmt).one()
        session.delete(task_with_id)
        session.commit()
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=500, detail=f"Error deleting tasks: {e}")
    finally:
        session.close()