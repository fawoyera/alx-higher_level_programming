#!/usr/bin/node
/* Script to print the number of movies where the character "Wedge Antilles" is present */

const id = 18;
const wedgeAntillesURL = `https://swapi-api.alx-tools.com/api/people/${id}/`;
const URL = `${process.argv[2]}/`;

const request = require('request');

request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    const data = JSON.parse(body);
    let count = 0;
    for (const datum of data.results) {
      if (datum.characters.includes(wedgeAntillesURL)) {
        count++;
      }
    }
    console.log(count);
  }
});
