-- This script displays the top 3 cities temperature during July to August ordered by temperature (descending)
SELECT city, AVG(value) AS avg_temp FROM temperatures WHERE month = 7 OR month = 8 GROUP BY city ORDER by avg_temp DESC LIMIT 3;
