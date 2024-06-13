#!/usr/bin/node
/* Script to print the all the characters of a Star Wars movie with Movie ID passed as argument */

const id = `${process.argv[2]}`;
const URL = `https://swapi-api.alx-tools.com/api/films/${id}`;

const request = require('request');

request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    const movie = JSON.parse(body);
    for (const characterURL of movie.characters) {
      request(characterURL, function (error, response, body) {
        if (error) {
          console.error('error:', error);
        } else {
          const character = JSON.parse(body);
          console.log(`${character.name}`);
        }
      });
    }
  }
});
