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
        encryptArr.push(alphabet[alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i])]);
        if((alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i])) === 26) {encryptArr[i] = 'A'};
       }
    } 
    for (let j = 0; j < str.length; j++) {
      if(strOld[j] === ' ') {
        encryptArr.splice(j, 0, ' ');
      }
    }
    
    for (let j = str.length+2; j < strOld.length; j++) {
        encryptArr.push(strOld[j])
    }
    return (encryptArr.join(''));
  }    

  decrypt(string, key) {

    if(string === undefined || key === undefined) throw new Error('THROWN')
    
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
        if((alphabet.length - (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]))) > 0) {
          encryptArr.push(alphabet[alphabet.length - (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]))])
console.log(str)
        }else {
          encryptArr.push(alphabet[alphabet.length - (alphabet.length - (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]))) * -1])
        if((alphabet.length - (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]))) === 0) {
          encryptArr[i] = 'A'
        }
        }
    } 
    
    for (let j = 0; j < str.length; j++) {
      if(strOld[j] === ' ') {
        encryptArr.splice(j, 0, ' ');
      }
    }
    
    console.log(encryptArr)
    for (let j = encryptArr.length; j < strOld.length; j++) {
        encryptArr.push(strOld[j])
        
    }
    
    console.log('ROLLING SCOPES SHOOL RULES!')
    return encryptArr.join('');
  //   console.log(encryptArr, string.toUpperCase())
  //   for (let i = 0; i < string.length; i++) {
  //     console.log(encryptArr[i], string[i].toUpperCase())
  //     if(encryptArr[i] !== string[i].toUpperCase()) {
  //       encryptArr.splice(i, 0, string[i]);
  //     }
      
  // }return(encryptArr)
  }
}

const directMachine = new VigenereCipheringMachine()
console.log(directMachine.decrypt('8q', 'rollingscopes'))


module.exports = VigenereCipheringMachine;
