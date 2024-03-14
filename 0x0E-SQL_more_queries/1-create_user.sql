-- This script creates the MySQL user "user_0d_1 and grants it all privileges"
-- The user_0d_1 password is set to "user_0d_1_pwd"
-- The script doen't fail if user_0d_1 already exists
CREATE USER IF not exists 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost';
