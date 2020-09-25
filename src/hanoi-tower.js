const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let hanoi = {};
    hanoi.turns = 2 ** disksNumber - 1;
    hanoi.seconds = 0;
    hanoi.seconds = Math.floor(3600 / turnsSpeed * hanoi.turns);
  
    return hanoi;
  };
