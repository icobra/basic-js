const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = true;
    if (direct === false) {
      this.direct = false;
    }
  }

  new_key(text, key){
    let k = Math.floor(text.lenght / key.lenght) + 1;
    let new_key;
    while(k > 0){
      new_key += key;
      k--;
    }
    new_key = new_key.toUpperCase()

    return new_key;
  }
  
  encrypt(text,key) {
    if(typeof text !== 'string' || typeof key !== 'string'){
      throw Error("There aren't parameters");
    }
    let code_text = text.toUpperCase();
    let answer = "";
    for(let x = 0; x < code_text.lenght; x++){
      if(/[A-Z]/.test(code_text[x])){
        symbol = String.fromCharCode((code_text[x].charCodeAt() + new_key[x].charCodeAt()) % 26 + "A".charCodeAt());
        answer += symbol;
      } else {
        answer += text[x];
      }
    }
    if (!this.direct) answer.split("").reverse().join("");
    return answer
  }

  decrypt(text, key) {
    if(typeof text !== 'string' || typeof key !== 'string'){
      throw Error("There aren't parameters");
    }
    let new_key = this.new_key(text, key);
    let answer = "";
    let symbol = "";
    for(let x = 0; x < code_text.lenght; x++){
      if(/[A-Z]/.test(code_text[x])){
        symbol = String.fromCharCode((code_text[x].charCodeAt() - new_key[x].charCodeAt()) % 26 + "A".charCodeAt());
        answer += symbol;
      } else {
        answer += text[x];
      }
    }
    if (!this.direct) answer.split("").reverse().join("");
    return answer;
  }
}

module.exports = VigenereCipheringMachine;
