const CustomError = require("../extensions/custom-error");

const { value } = require("./simple-chain");

module.exports = 
function repeater(str, options) {
  let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator, string, arr;
  string = str;
  
  this.repeatTimes = repeatTimes;
  this.string = string;
  this.separator = separator;
  this.addition = addition;
  this.additionRepeatTimes = additionRepeatTimes;
  this.additionSeparator = additionSeparator;

  if (options.separator == undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }

  if (options.addition === undefined) {
    options.addition = ''
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  
  

  arr = ['']
  arr.map(element => {
    for(let i = 0; i < options.repeatTimes; i++) {
      arr.push(`${string}`);
    for(let i = 0; i < options.additionRepeatTimes; i++) {
      arr.push(`${options.addition}`);
      arr.push(`${options.additionSeparator}`);
    }
    arr.push(`${options.separator}`);
    }
    return arr
  });

  arr.reduce((total, amount, index, arr) => {
    if(arr[index] === options.additionSeparator && arr[index+1] === options.separator) { 
      return arr[index] = '';
    } 
    else return arr

  }, []).pop()
  return (arr = arr.join(''))
};
