#!/usr/bin/node
const dict = require('./101-data').dict;
const newDict = {};
for (const value of Object.values(dict)) {
  newDict[value] = [];
}
for (const [key, value] of Object.entries(dict)) {
  newDict[value].push(key);
}
console.log(newDict);
