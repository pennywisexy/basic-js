const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let oldArr = arr;
    let array;
    let count = 0;

    if (arr.length === 0) {
      return count = 1
    }
    while (arr.length) {
      count++
      arr = arr.reduce((depth, elem) => {
        if (elem instanceof Array) depth.push(...elem);
        depth.length >= 1 ? array = depth : depth
        return depth;
      }, []);
    }
    for (let i in array) {
      if(array[i] instanceof Array) count+=1
    }
    return count
  }
}
