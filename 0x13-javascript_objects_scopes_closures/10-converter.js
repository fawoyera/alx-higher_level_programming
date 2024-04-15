#!/usr/bin/node
exports.converter = function (base) {
  function numBase (number) {
    return number.toString(base);
  }
  return numBase;
};
