const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   let answer = [];
   for(x=0; x < arr.length; x++){
    if(arr[x] == '--discard-next'){
       x++;
    }else if(arr[x] == '--discard-prev'){
      answer.pop();
    }else if(arr[x] == '--double-next'){
      answer.push(arr[x++]);     
    }else if(arr[x] == '--double-prev'){
      answer.push(answer[-1]);
    }else{
      answer.push(arr[x]);
    }
   }
  return answer;
};
