const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arr = [];
  const [discardNext, 
         discardPrev, 
         doubleNext, 
         doublePrev] = ['--discard-next', 
                        '--discard-prev', 
                        '--double-next', 
                        '--double-prev'];

  arr = array.filter(a => arr.push(a));

  if(Array.isArray(arr)) {
    arr.reduce((total, amount, index, arr) => {
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
  } else throw new Error('Error')
};
