#!/usr/bin/python3
"""
    Module script to create the State "California" with City "San Francisco"
    from the database hbtn_0e_100_usa
"""
from relationship_state import Base, State
from relationship_city import City
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                           sys.argv[1], sys.argv[2], sys.argv[3]))
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    # Create the State "California" with the City "San Francisco"
    California = State(name="California")
    San_Francisco = City(name="San Francisco")
    California.cities.append(San_Francisco)

    # add and commit the new State object to session
    session.add(California)
    session.commit()

    session.close()
