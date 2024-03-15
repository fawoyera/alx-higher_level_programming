-- This script lists all shows contained in the database "hbtn_0d_tvshows" that have at least one genre linked
-- The database should be passed as argument of the mysql command
SELECT tv_shows.title, tv_show_genres.genre_id
	FROM tv_shows JOIN tv_show_genres
	ON tv_shows.id = tv_show_genres.show_id
	ORDER BY tv_shows.title, tv_show_genres.genre_id;
