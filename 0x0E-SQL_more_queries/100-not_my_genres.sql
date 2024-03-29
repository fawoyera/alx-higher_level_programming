-- This script uses the database "hbtn_0d_tvshows" to list all genres not linked to the show "Dexter"
-- The database name should be passed as argument of the mysql command
SELECT tv_genres.name
	FROM tv_genres
	WHERE tv_genres.name
	NOT IN
	(
		SELECT DISTINCT(tv_genres.name)
			FROM tv_genres JOIN tv_show_genres
		ON tv_genres.id = tv_show_genres.genre_id
		JOIN tv_shows
		ON tv_show_genres.show_id = tv_shows.id
		WHERE tv_shows.title = 'Dexter'
	)
	ORDER BY tv_genres.name;
