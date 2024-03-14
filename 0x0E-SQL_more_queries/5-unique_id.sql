-- This script creates a table unique_id on MySQL server
-- The database name should be passed as argument of mysql command
-- The script does not fail if unique_id already exists
CREATE TABLE IF not exists unique_id (id INT UNIQUE DEFAULT 1, name VARCHAR(256));
