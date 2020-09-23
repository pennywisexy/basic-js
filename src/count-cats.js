const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  let count;
  
  cats = cats.flat()
  count = cats.filter(function(a) {return a === '^^'}).length
  return count
};