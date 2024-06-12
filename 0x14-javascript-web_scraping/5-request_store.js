#!/usr/bin/node
/* Script to get the contents of a webpage and store it in a file */

const URL = `${process.argv[2]}`;
const filePath = `${process.argv[3]}`;

const request = require('request');
const fs = require('fs');

request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
