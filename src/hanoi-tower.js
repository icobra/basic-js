const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let answer = {
    turns: 0,
    seconds: 0
  }

  answer.turns = Math.pow(2, disksNumber) - 1;
  const HOUR = 3600;
  answer.seconds =  Math.floor((answer.turns * HOUR) / turnsSpeed);

  return answer;
};
