-- This script creates the database "hbtn_0d_usa" and the table "states" on MySQL server
-- The script does not fail if "hbtn_0d_usa" or "states" already exists
CREATE DATABASE IF not exists hbtn_0d_usa;
USE hbtn_0d_usa;
CREATE TABLE IF not exists states (id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(256) NOT NULL);
