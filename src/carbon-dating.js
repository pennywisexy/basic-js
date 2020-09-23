const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (+sampleActivity > 0 && +sampleActivity < 15 && typeof(sampleActivity) === 'string') {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693);
  } else {
    return false;
  }
};
