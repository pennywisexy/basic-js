const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let oldArr = arr;
    let array = [];
    let count = 0;

    if (arr.length === 0) {
      return count = 1
    }
    while (arr.length) {
      count++
      arr = arr.reduce((depth, elem) => {
        if (elem instanceof Array) depth.push(...elem);
        return depth;
      }, []);
    }
    console.log(arr)
    return count
  }
}
