#!/usr/bin/node
const numFact = Number(process.argv[2]);
function fact (num) {
  if (isNaN(num) || num === 0) { return 1; }
  return num * fact(num - 1);
}
console.log(fact(numFact));
