const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  // constructor(bul) {

  // }
  encrypt(string, key) {
    if(string === undefined || key === undefined) throw new Error('THROWN');

    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let str = string.toUpperCase();
    let strOld = string.toUpperCase();
    let keyNew = key.toUpperCase();
    let encryptArr = [];

    str=str.match(/[A-Z]/gi);
    keyNew = keyNew.split(''); 
    strOld = strOld.split('');
    
    let i = 0;
    
    while (keyNew.length-1 <= str.length-1) {
    while (i<key.length) {
      keyNew = keyNew.concat(keyNew[i]);
    i++;
    }
      i = 0;
    }

    keyNew.length = str.length;

    for(let i = 0; i < str.length; i++) {
      if ((alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i])) > 26) {
        encryptArr.push(alphabet[alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]) - 26])
      }else {
        encryptArr.push(alphabet[alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i])])
      }
    } 
    
    for (let j = 0; j < strOld.length; j++) {
      if(strOld[j] === ' ') {
        encryptArr.splice(j, 0, ' ')
      }
    }
    
    return encryptArr.join('') + '!'
  }    

  decrypt(encryptedMessage, key) {
    let alphabet = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];

    if(encryptedMessage === undefined || key === undefined) throw new Error('THROWN')
    

  }
}

const directMachine = new VigenereCipheringMachine()
console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'))


module.exports = VigenereCipheringMachine;
