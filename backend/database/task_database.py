from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os


load_dotenv()
Base = declarative_base()

# database_path = os.path.dirname(__file__)
# parent_database_path = os.path.join(os.path.dirname(database_path), 'tasks.db')
# engine = create_engine(f'sqlite:///{parent_database_path}')
DATABASE_URL = os.getenv('DATABASE_URL')
if DATABASE_URL is None:
    raise ValueError("No DATABASE_URL environment variable set")
engine = create_engine(DATABASE_URL)


Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)



