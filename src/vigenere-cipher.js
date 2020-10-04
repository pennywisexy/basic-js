const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string, key) {
    if(string === undefined || key === undefined) throw new Error('THROWN')
  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) throw new Error('THROWN')
    
  }
}

module.exports = VigenereCipheringMachine;
