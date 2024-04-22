#!/usr/bin/python3
"""
    Module script that adds the State object "Louisiana" to the database
"""
import sys
from model_state import Base, State
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


if (__name__ == "__main__"):
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                           sys.argv[1], sys.argv[2], sys.argv[3]))
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    # Create State instance (object) "Louisiana" and add/commit to the session
    Louisiana = State(name="Louisiana")
    session.add(Louisiana)
    session.commit()

    # Query the new states after creation and print id of new State object
    query_states = session.query(State).filter(State.name.like("Louisiana")
                                               ).order_by(State.id).all()
    for state in query_states:
        print(state.id)

    session.close()
