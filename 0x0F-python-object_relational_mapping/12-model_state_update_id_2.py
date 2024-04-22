#!/usr/bin/python3
"""
    Module script that changes the name of a State object from the database
"""
import sys
from model_state import Base, State
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


if (__name__ == "__main__"):
    # Connect to the database and make a session
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                           sys.argv[1], sys.argv[2], sys.argv[3]))
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    # Query for the State object with id 2
    state_object = session.query(State).filter(State.id == 2).first()

    # Update the name of State object returned above
    state_object.name = "New Mexico"

    # Commit changes to State object
    session.commit()

    session.close()
