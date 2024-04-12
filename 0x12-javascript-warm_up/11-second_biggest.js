#!/usr/bin/node
const argc = process.argv.length - 2;
if (argc === 0 || argc === 1) {
  console.log(0);
} else {
  /* save the arguments to an array variable */
  const argArray = [];
  for (let i = 0; i < argc; i++) { argArray.push(Number(process.argv[i + 2])); }
  /* pop the max number from the array */
  const maxNum = Math.max(...argArray);
  const index = argArray.indexOf(maxNum);
  argArray.splice(index, 1);
  /* print the second max number */
  console.log(Math.max(...argArray));
}
