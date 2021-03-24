const CustomError = require("../extensions/custom-error");

// module.exports = function countCats(/* matrix */) {
module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let cats = 0;
  for(x=0; x < matrix.length; x++){
    for(j=0; j < matrix[x].length; j++){
      if(matrix[x][j] == "^^"){
        cats++;
      }
    }
  }
  return cats;
};
