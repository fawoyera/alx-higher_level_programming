#!/usr/bin/python3
"""
    Module script to list all City objects
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

    query_results = session.query(City).order_by(City.id).all()

    for city in query_results:
        print("{}: {} -> {}".format(city.id, city.name, city.state.name))

    session.close()
