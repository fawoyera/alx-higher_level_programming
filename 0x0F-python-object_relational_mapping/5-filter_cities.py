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
    name = sys.argv[4]

    connection = MySQLdb.connect(host="localhost", port=3306, user=username,
                                 passwd=password, db=database, charset="utf8")
    cursor = connection.cursor()

    if (';' not in name) and ('\'' not in name):
        cursor.execute("""SELECT cities.name
                       FROM cities
                       JOIN states
                       ON cities.state_id = states.id
                       WHERE states.name = '{}'""".format(name))

        query_results = cursor.fetchall()

        length = len(query_results)
        count = 0
        for row in query_results:
            print(row[0], end="")
            count += 1
            if (count < length):
                print(", ", end="")
            else:
                print()

    cursor.close()
    connection.close()
