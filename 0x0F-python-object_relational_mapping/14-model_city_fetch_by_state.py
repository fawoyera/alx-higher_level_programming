#!/usr/bin/python3
"""
    Module script to list all City objects from the database hbtn_0e_14_usa
"""
import sys
from model_state import Base, State
from model_city import City
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                           sys.argv[1], sys.argv[2], sys.argv[3]))
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    query_results = session.query(State, City).filter(State.id == City.state_id
                                                      ).order_by(City.id).all()

    for state, city in query_results:
        print("{}: ({}) {}".format(state.name, city.id, city.name))

    session.close()
