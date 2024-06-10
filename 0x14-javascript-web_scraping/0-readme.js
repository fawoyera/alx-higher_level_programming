#!/usr/bin/node
/* Script to read and print the content of a file passed as argument */

const filePath = process.argv[2];

const fs = require('fs');

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
