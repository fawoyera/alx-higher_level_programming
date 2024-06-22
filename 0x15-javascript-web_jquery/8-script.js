#!/usr/bin/node
/* script to fetch and list the title for all movies from a URL that returns a json */

$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (response) {
  for (const movie of response.results) {
    $('ul#list_movies').append(`<li>${movie.title}</li>`);
  }
});
