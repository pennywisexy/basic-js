const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bul) {
      this.bul = bul;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("THROWN");

    if (string.match(/[A-Z]/gi) === null) {
      return string;
    }
    
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let str = string.toUpperCase();
    let strOld = string.toUpperCase();
    let keyNew = key.toUpperCase();
    let encryptArr = [];
    let separator;

    separator = string.split(string.match(/[A-Z]/gi));
    str = str.match(/[A-Z]/gi);
    keyNew = keyNew.split("");
    strOld = strOld.split("");

    let i = 0;

    while (keyNew.length - 1 <= str.length - 1) {
      while (i < key.length) {
        keyNew = keyNew.concat(keyNew[i]);
        i++;
      }
      i = 0;
    }

    keyNew.length = str.length;

    for (let i = 0; i < str.length; i++) {
      if (alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]) > 26) {
        encryptArr.push(
          alphabet[alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]) - 26]
        );
      } else {
        encryptArr.push(
          alphabet[alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i])]
        );
        if (alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]) === 26) {
          encryptArr[i] = "A";
        }
      }
    }
    for (let j = 0; j < str.length; j++) {
      if (strOld[j] === " ") {
        encryptArr.splice(j, 0, " ");
      }
    }

    // for (let j = str.length+2; j < strOld.length; j++) {
    //     encryptArr.push(strOld[j])
    // }

    for (let j = encryptArr.length; j < strOld.length; j++) {
      encryptArr.push(strOld[j].match(/[^A-Z]/gi));
    }
    encryptArr.join("");
    encryptArr = encryptArr.filter((a) => a !== null);

    if (encryptArr.length !== string.length) {
      for (let i = 0; i < string.length; i++) {
        encryptArr.push(strOld[i]);
        if (string[i].match(/[^A-Z]/gi) !== null) {
          encryptArr.splice(i, 0, string[i].match(/[^A-Z]/gi));
        }
      }
    }
    encryptArr = encryptArr.filter((a) => a !== null).flat();
    encryptArr.length = string.length;
    if(this.bul === false) {
      encryptArr.reverse()
    }
    return encryptArr.join("");
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("THROWN");

    if (string.match(/[A-Z]/gi) === null) {
      return string;
    }
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let str = string.toUpperCase();
    let strOld = string.toUpperCase();
    let keyNew = key.toUpperCase();
    let encryptArr = [];
    str = str.match(/[A-Z]/gi);
    keyNew = keyNew.split("");
    strOld = strOld.split("");
    let i = 0;
    while (keyNew.length - 1 <= str.length - 1) {
      while (i < key.length) {
        keyNew = keyNew.concat(keyNew[i]);
        i++;
      }
      i = 0;
    }

    keyNew.length = str.length;
    for (let i = 0; i < str.length; i++) {
      if (
        alphabet.length -
          (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i])) >
        0
      ) {
        encryptArr.push(
          alphabet[
            alphabet.length -
              (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]))
          ]
        );
      } else {
        encryptArr.push(
          alphabet[
            alphabet.length -
              (alphabet.length -
                (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i]))) *
                -1
          ]
        );
        if (
          alphabet.length -
            (26 - alphabet.indexOf(str[i]) + alphabet.indexOf(keyNew[i])) ===
          0
        ) {
          encryptArr[i] = "A";
        }
      }
    }

    for (let j = 0; j < str.length; j++) {
      if (strOld[j] === " ") {
        encryptArr.splice(j, 0, " ");
      }
    }

    for (let j = encryptArr.length; j < strOld.length; j++) {
      encryptArr.push(strOld[j].match(/[^A-Z]/gi));
    }

    encryptArr.join("");
    encryptArr = encryptArr.filter((a) => a !== null);

    if (encryptArr.length !== string.length) {
      for (let i = 0; i < string.length; i++) {
        encryptArr.push(strOld[i]);
        if (string[i].match(/[^A-Z]/gi) !== null) {
          encryptArr.splice(i, 0, string[i].match(/[^A-Z]/gi));
        }
      }
    }
    encryptArr = encryptArr.filter((a) => a !== null).flat();

    encryptArr.length = string.length;
    if(this.bul === false) {
      encryptArr.reverse()
    }
    return encryptArr.join("");
  }
}
module.exports = VigenereCipheringMachine;
