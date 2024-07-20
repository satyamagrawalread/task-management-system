from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

engine = create_engine(r'sqlite:///E:\Desktop\CODING\react_project\task-management-system\tasks.db')

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)


