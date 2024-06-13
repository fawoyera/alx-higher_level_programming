#!/usr/bin/node
/* Script to print all the characters of a Star Wars movie with Movie ID passed as argument */

const util = require('util');
const request = require('request');
const requestPromise = util.promisify(request);

const id = `${process.argv[2]}`;
const URL = `https://swapi-api.alx-tools.com/api/films/${id}`;

async function getMovie () {
  try {
    const response = await requestPromise(URL);
    const movie = JSON.parse(response.body);

    const characterPromises = movie.characters.map(characterURL => requestPromise(characterURL));
    const characterResponses = await Promise.all(characterPromises);

    characterResponses.forEach(characterResponse => {
      const characterData = JSON.parse(characterResponse.body);
      console.log(characterData.name);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getMovie();
