#!/usr/bin/python3
"""
    Module script that deletes all State objects with a name
    containing the letter a from the database hbtn_0e_6_usa
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

    # Query for the State object with name containing the letter a
    state_objects = session.query(State).filter(State.name.like("%a%")).all()

    # Delete each of the State objects returned above
    for state in state_objects:
        session.delete(state)

    # Commit changes to State object
    session.commit()

    session.close()
