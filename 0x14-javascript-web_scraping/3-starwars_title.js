#!/usr/bin/node
/* Script to print the title of a Star Wars movie with episode number passed as argument */

const id = process.argv[2];
const URL = `https://swapi-api.alx-tools.com/api/films/${id}`;

const request = require('request');

request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
