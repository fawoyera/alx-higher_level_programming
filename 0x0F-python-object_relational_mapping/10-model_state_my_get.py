#!/usr/bin/python3
"""
    Module script to list all State objects that contain the letter a
    from the database hbtn_0e_6_usa
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

    name = sys.argv[4]
    if (';' not in name) and ('\'' not in name):
        query_state = session.query(State).filter(State.name.like(name)
                                                  ).order_by(State.id).first()

        if query_state is None:
            print("Not found")
        else:
            print(query_state.id)

    session.close()
