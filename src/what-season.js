const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date == null) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date && !isNaN(date.valueOf()))) {
    throw new Error("Input is not a date");
  }

  let month = date.getMonth();

  if(month == 0 || month == 1 || month == 11){
    return 'winter';
  }
  if(month == 2 || month == 3 || month == 4){
    return 'spring';
  }
  if(month == 5 || month == 6 || month == 7){
    return 'summer';
  }
  if(month == 8 || month == 9 || month == 10){
    return 'autumn';
  }
};