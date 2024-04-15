#!/usr/bin/node
exports.converter = function (base) {
  function numBase(number) {
    const result = [];
    do {
      result.push(number % base);
      number = Math.floor(number / base);
    }
    while (number > 0);
    for (let i = result.length - 1; i >= 0; i--) {
      process.stdout.write(result[i].toString());
    }
    return '';
  }
  return numBase;
};
