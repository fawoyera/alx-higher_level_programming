#!/usr/bin/python3
"""
    Module script to list all State objects and corresponding City objects
    from the database hbtn_0e_101_usa
"""
import sys
from relationship_state import Base, State
from relationship_city import City
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                           sys.argv[1], sys.argv[2], sys.argv[3]))
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    """query_results = session.query(State, City).filter(
                                            State.id == City.state_id
                                                      ).order_by(State.id,
                                                    City.id).all()"""

    """previous_state = "dummy"
    for state, city in query_results:
        if state.name != previous_state:
            print("{}: {}".format(state.id, state.name))
            previous_state = state.name
        print("\t{}: {}".format(city.id, city.name))"""

    query_results = session.query(State).order_by(State.id).all()
    for state in query_results:
        print("{}: {}".format(state.id, state.name))
        for city in state.cities:
            print("\t{}: {}".format(city.id, city.name))

    session.close()
