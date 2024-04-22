#!/usr/bin/python3
"""
    Module that defines a class City to model the table cities of database
"""
from relationship_state import Base, State
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship


class City(Base):
    """ Class to model the table cities of database"""
    __tablename__ = "cities"
    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False)
    state_id = Column(Integer, ForeignKey(State.id))

    state = relationship("State", back_populates="cities")
