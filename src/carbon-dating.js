const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  if(isNaN(sampleActivity) || typeof(sampleActivity) != 'string'){
    return false;
  }
  
  if(sampleActivity < 15 && sampleActivity > 0){
    let sample = parseFloat(sampleActivity);
    let k = 0.693 / HALF_LIFE_PERIOD;
    let answer = (Math.log(MODERN_ACTIVITY / sample)) / k;
    return Math.ceil(answer);
  } else {
    return false;
  }
};
