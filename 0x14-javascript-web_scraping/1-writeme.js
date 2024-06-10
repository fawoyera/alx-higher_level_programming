#!/usr/bin/node
/* Script to write content to a file passed. Content and filePath are passed arguments */

const filePath = process.argv[2];
const data = process.argv[3];

const fs = require('fs');

fs.writeFile(filePath, data, { encoding: 'utf-8' }, (err) => {
  if (err) {
    console.error(err);
  }
});
