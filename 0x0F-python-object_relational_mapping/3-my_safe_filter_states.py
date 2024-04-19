#!/usr/bin/python3
"""
    Module Script to list all states from the database hbtn_0e_0_usa
    where name matches the given argument safely
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

    prepared_statement = "PREPARE statement1 FROM \'SELECT * FROM states\
                          WHERE states.name = ? ORDER BY states.id\'"
    set_statement = "set @name='{}'".format(name)
    execute_statement = "execute statement1 using @name"

    if (';' not in name) and ('\'' not in name):
        cursor.execute(prepared_statement)
        cursor.execute(set_statement)
        cursor.execute(execute_statement)

        query_results = cursor.fetchall()

        for row in query_results:
            print(row)

    cursor.close()
    connection.close()
