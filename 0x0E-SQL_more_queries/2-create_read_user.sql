-- This script creates the database hbtn_0d_2 and the user user_0d_2
-- user_0d_2 have only SELECT privilege in the database hbtn_0d_2
-- user_0d_2 password is set to "user_0d_2_pwd"
-- script does not fail if hbtn_0d_2 or user_0d_2 already exists
CREATE DATABASE IF not exists hbtn_0d_2;
CREATE USER IF not exists 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d_2_pwd';
GRANT SELECT ON hbtn_0d_2.* TO 'user_0d_2'@'localhost';
