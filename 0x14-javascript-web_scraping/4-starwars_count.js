#!/usr/bin/node
/* Script to print the number of movies where the character "Wedge Antilles" is present */

const request = require('request-promise-native');
const URL = `${process.argv[2]}`;

async function getCount () {
  try {
    const body = await request(URL);
    const data = JSON.parse(body);
    let count = 0;

    for (const datum of data.results) {
      let found = false;

      for (const characterURL of datum.characters) {
        const characterBody = await request(characterURL);
        const character = JSON.parse(characterBody);

        if (character.name === 'Wedge Antilles') {
          count++;
          found = true;
          break; // exit the inner loop
        }
      }

      if (found) {
        continue; // skip to the next datum if Wedge Antilles is found
      }
    }

    console.log(count);
  } catch (error) {
    console.error('error:', error);
  }
}

getCount();
