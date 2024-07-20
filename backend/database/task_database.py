from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

Base = declarative_base()

database_path = os.path.dirname(__file__)
parent_database_path = os.path.join(os.path.dirname(database_path), 'tasks.db')
engine = create_engine(f'sqlite:///{parent_database_path}')

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)


