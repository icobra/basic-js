const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let answer = 0;
    let counter = 1;
    for(let x=0; x < arr.length; x++){
      if(Array.isArray(arr[x])){
        counter = this.calculateDepth(arr[x]);
        if(counter > answer){
          answer = counter;
        }
      }
    }
  
    return ++answer;
  }
};
