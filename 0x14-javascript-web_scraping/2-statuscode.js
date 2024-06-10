#!/usr/bin/node
/* Script to return the status code of a GET request on URL passed as argument */

const URL = process.argv[2];

const request = require('request');

request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  console.log('code:', response && response.statusCode);
});
