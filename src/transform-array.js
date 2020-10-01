const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arr = [];
  arr = array.filter(a => arr.push(a));
  let oldArr = [];
  let newArr = []
  const [discardNext, 
         discardPrev, 
         doubleNext, 
         doublePrev] = ['--discard-next', 
                        '--discard-prev', 
                        '--double-next', 
                        '--double-prev'];

  oldArr = arr.filter(a => a === discardNext || a === discardPrev || a === doubleNext || a === doublePrev)
  if(oldArr.length === 0) return array;

  if(Array.isArray(arr)) {
newArr = arr.map(function (a) {
    switch (a) {
      case discardNext:
        delete arr[(arr.indexOf(a) + 1)]
        return arr
      case discardPrev:
        delete arr[(arr.indexOf(a) - 1)]
        return arr
      case doubleNext:
        arr[arr.indexOf(a)] = arr[arr.indexOf(a) + 1]
        return arr
      case doublePrev:
        arr[arr.indexOf(a)] = arr[arr.indexOf(a) - 1]
        return arr
    }
    return arr;
  })
  return newArr[0].filter(a => a !== discardNext && a !== discardPrev && a !== doubleNext && a !== doublePrev && a !== undefined);
  }else throw new Error('Error')

  
};
