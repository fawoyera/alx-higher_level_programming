-- This script lists the number of records with the same score in the table "second_table" of the database "hbtn_0c_0" of MySQL server
-- The result will display the score and the number of records for that score, and is sorted by number of records in descending order
-- The database name should be passed as an argument to the mysql command
SELECT score, COUNT(score) AS number FROM second_table GROUP BY score ORDER BY number DESC;
