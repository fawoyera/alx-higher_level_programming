#!/usr/bin/node
const convertedNum = Number(process.argv[2]);
if (isNaN(convertedNum)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(convertedNum)}`);
}
