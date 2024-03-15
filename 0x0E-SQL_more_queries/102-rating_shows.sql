-- This script lists all shows from the database "hbtn_0d_tvshows_rate" by their rating
-- The database name should be passed as argument of the mysql command
SELECT tv_shows.title, SUM(tv_show_ratings.rate) AS rating
	FROM tv_shows JOIN tv_show_ratings
	ON tv_shows.id = tv_show_ratings.show_id
	GROUP BY tv_shows.title
	ORDER BY rating DESC;
