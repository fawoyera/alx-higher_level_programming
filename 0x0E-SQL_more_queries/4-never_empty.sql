-- This script creates a table "id_not_null" on MySQL server
-- The database name should be passed as argument of the mysql command
-- The script does not fail if "id_not_null" already exists
CREATE TABLE IF not exists id_not_null (id INT NOT NULL DEFAULT 1, name VARCHAR(256));
