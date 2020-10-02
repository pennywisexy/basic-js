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
    newArr = arr.reduce((total, amount, index, arr) => {
      if(amount === discardNext) {
        arr[index + 1] = discardPrev;
        total.concat(arr[index + 1]);
        return total;
      }
      if(amount === discardPrev) {
        arr[index - 1] = discardPrev;
        total.concat(arr[index - 1]);
        return total;
      }
      if(amount === doubleNext) {
        
        arr[index] = arr[index + 1]
        return total;
      }
      if(amount === doublePrev) {
        arr[index] = arr[index - 1]
        return total;
      } 
      return total
    }, []);
  return arr.filter(a => a !== discardNext && a !== discardPrev && a !== doubleNext && a !== doublePrev && a !== undefined);
  }else throw new Error('Error')
};
