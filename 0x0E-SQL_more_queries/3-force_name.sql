-- This script creates the table "force_name" on MySQL server
-- The database name should be passed  as an argument of the mysql command
-- The script does not fail if force_name already exists
CREATE TABLE IF not exists force_name (id INT, name VARCHAR(256) NOT NULL);
