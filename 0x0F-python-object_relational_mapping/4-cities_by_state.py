#!/usr/bin/python3
"""
    Module Script to list all cities from the database hbtn_0e_4_usa
"""
import MySQLdb
import sys


if __name__ == "__main__":
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    connection = MySQLdb.connect(host="localhost", port=3306, user=username,
                                 passwd=password, db=database, charset="utf8")
    cursor = connection.cursor()

    cursor.execute("""SELECT cities.id, cities.name, states.name
                   FROM cities
                   JOIN states
                   ON cities.state_id = states.id
                   ORDER BY cities.id""")

    query_results = cursor.fetchall()

    for row in query_results:
        print(row)

    cursor.close()
    connection.close()
