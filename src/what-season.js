const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const [winter, spring, summer, autumn] = [
    "winter",
    "spring",
    "summer",
    "autumn",
  ];

  if (date instanceof Date) {
    let month = date.getMonth();
    switch (month) {
      case 0:
      case 1:
      case 11:
        return console.log(winter);
      case 2:
      case 3:
      case 4:
        return console.log(spring);
      case 5:
      case 6:
      case 7:
        return console.log(summer);
      case 8:
      case 9:
      case 10:
        return console.log(autumn);
      default:
        return false;
    }
  } else return console.log("Unable to determine the time of year!");
};
