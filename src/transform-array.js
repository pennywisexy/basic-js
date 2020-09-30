const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arr = array;
  let newArr = []
  const [discardNext, 
         discardPrev, 
         doubleNext, 
         doublePrev] = ['--discard-next', 
                        '--discard-prev', 
                        '--double-next', 
                        '--double-prev'];

  if (array.length === 0) return array;
  if(Array.isArray(arr)) {
newArr = arr.reduce(function (b, a) {
    switch (a) {
      case discardNext:
        arr[arr.indexOf(a) + 1] = '2213123123123123'
        return arr
      case discardPrev:
        arr[arr.indexOf(a) - 1] = '12121123123123'
        return arr
      case doubleNext:
        arr[arr.indexOf(a)] = arr[arr.indexOf(a) + 1]
        return arr
      case doublePrev:
        arr[arr.indexOf(a)] = arr[arr.indexOf(a) - 1]
        return arr
    }
    return arr
  })
  return newArr.filter(a => typeof(a) === 'number' );
  }else throw new Error('Error')

  
};