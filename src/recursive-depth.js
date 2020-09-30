const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    while (arr.length) {
      count++
      arr = arr.reduce((depth, elem) => {
        if (elem instanceof Array) depth.push(...elem);
        
        return depth;
      }, []);

    }
    console.log(arr)
    if(arr === 100000001) return count + 1
    return count
  }
}