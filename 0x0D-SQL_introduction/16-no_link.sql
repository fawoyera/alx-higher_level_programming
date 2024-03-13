-- This script lists all records of the table "second_table" of the database "hbtn_0c_0" of MySQL server
-- Rows without a name value are not listed
-- Results will display the score and the name (in this order)
-- The database name should be passed as an argument to the mysql command
SELECT score, name FROM second_table WHERE name IS NOT NULL ORDER BY score DESC;
