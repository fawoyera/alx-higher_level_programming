#!/usr/bin/node
/* script to fetch the character name from a URL that returns a json */

$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (response) {
  $('#character').text(response.name);
});
