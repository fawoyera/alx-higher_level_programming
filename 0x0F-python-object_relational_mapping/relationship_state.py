#!/usr/bin/python3
"""
    Module that defines a class State to model the table states of database
"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship


Base = declarative_base()


class State(Base):
    """ Class to model the table states of database"""
    __tablename__ = "states"
    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False)

    cities = relationship("City", cascade="all, delete",
                          back_populates="state")
