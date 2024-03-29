-- This script converts the database hbtn_0c_0 to UTF8 (utf8mb4, collate utf8mb4_unicode_ci) in MySQL server
-- The database, table "first_table" and Field "name" in first_table
USE hbtn_0c_0;
ALTER TABLE first_table MODIFY id INT(11);
ALTER TABLE first_table MODIFY name VARCHAR(256) CHARACTER SET utf8mb4;
ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
