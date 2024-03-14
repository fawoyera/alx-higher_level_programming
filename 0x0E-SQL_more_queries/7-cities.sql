-- This script creates a database "hbtn_0d_usa" and table "cities" on MySQL server
-- The script does not fail if hbtn_0d_usa or cities already exists
CREATE DATABASE IF not exists hbtn_0d_usa;
USE hbtn_0d_usa;
CREATE TABLE IF not exists cities (
			id INT UNIQUE AUTO_INCREMENT NOT NULL,
			state_id INT NOT NULL,
			name VARCHAR(256) NOT NULL,
			PRIMARY KEY (id),
			FOREIGN KEY (state_id) REFERENCES states(id)
			);
