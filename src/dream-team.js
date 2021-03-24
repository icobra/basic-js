const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }

  let arr = [];
  for(x = 0; x < members.length; x++){
    if(typeof(members[x]) == 'string'){
      arr.push(members[x]);
    }
  }
  
  if(arr.length == 0){
    return false;
  }

  let answer = [];
  for(x = 0; x < arr.length; x++){
    arr[x] = arr[x].trim();
    answer.push(arr[x][0].toUpperCase());
  }

  if(answer.length == 0){
    answer = false;
  } else {
    answer = answer.sort();
    answer = answer.join("");
  }
  
  return answer;
};
