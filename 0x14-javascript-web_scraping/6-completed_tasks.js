#!/usr/bin/node
/* Script to compute the no of tasks completed by user id */

const URL = `${process.argv[2]}`;
const request = require('request');

request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    const todos = JSON.parse(body);
    const obj = {};
    let userId = 1;
    obj[`${userId}`] = 0;

    for (const todo of todos) {
      if (todo.userId === userId && todo.completed === true) {
        obj[`${userId}`] += 1;
      } else if (todo.userId === userId && todo.completed === false) {
        continue;
      } else {
        userId += 1;
        obj[`${userId}`] = 0;
        if (todo.userId === userId && todo.completed === true) {
          obj[`${userId}`] += 1;
        } else {
          continue;
        }
      }
    }
    let count = 1;
    process.stdout.write('{');
    for (const user in obj) {
      if (obj[user] > 0) {
        if (count === 1) {
          process.stdout.write(` '${user}': ${obj[user]}`);
          count++;
        } else {
          process.stdout.write(`,\n  '${user}': ${obj[user]}`);
          count++;
        }
      }
    }
    if (count > 1) {
      process.stdout.write(' ');
    }
    console.log('}');
  }
});
