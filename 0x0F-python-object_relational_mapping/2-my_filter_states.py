#!/usr/bin/python3
"""
    Module Script to list all states from the database hbtn_0e_0_usa
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

    cursor.execute("SELECT * FROM states WHERE states.name\
                   = '{}' ORDER BY states.id".format(name))
    query_results = cursor.fetchall()

    for row in query_results:
        print(row)

    cursor.close()
    connection.close()
