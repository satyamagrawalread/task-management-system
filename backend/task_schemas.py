from pydantic_core import PydanticCustomError
from typing import Optional
from task_models import StatusEnum
from pydantic import BaseModel, field_validator



class CreateTaskType(BaseModel):
    title: str
    description: Optional[str] = None
    status: Optional[str] = None

    @field_validator('title')
    @classmethod
    def title_must_not_be_empty(cls, v: str) -> str:
        if not v.strip():
            raise PydanticCustomError('empty_title_error', 'title must not be empty')
        return v
    
    @field_validator('status')
    @classmethod
    def status_format(cls, v: str) -> str:
        if v in StatusEnum._value2member_map_ or v==None:
            return v
        else:
            raise PydanticCustomError('status_format_error', 'status must be in a desired format')
    
class UpdateTaskType(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None

    @field_validator('title')
    @classmethod
    def title_must_not_be_empty(cls, v: str) -> str:
        if not v.strip():
            raise PydanticCustomError('empty_title_error', 'title must not be empty')
        return v
    
    @field_validator('status')
    @classmethod
    def status_format(cls, v: str) -> str:
        if v in StatusEnum._value2member_map_ or v==None:
            return v
        else:
            raise PydanticCustomError('status_format_error', 'status must be in a desired format')