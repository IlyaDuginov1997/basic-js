const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */


class VigenereCipheringMachineParent {
  constructor(props) {}

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  encryptObj = this.encryptFunc();
  encryptFunc() {
    let configObject = {};
    const copyAlphabet = [...this.alphabet];

    for (let i of this.alphabet) {
      for (let j = 0; j < copyAlphabet.length; j++) {
        configObject[i] = {
          ...configObject[i],
          [this.alphabet[j].toLowerCase()]: copyAlphabet[j]
        }
      }

      copyAlphabet.push(copyAlphabet.shift())
    }
    return configObject
  }

  decryptObj = this.decryptFunc();
  decryptFunc() {
    let configObject = {};
    const copyAlphabet = [...this.alphabet];

    for (let i of this.alphabet) {
      for (let j = 0; j < copyAlphabet.length; j++) {
        configObject[i] = {
          ...configObject[i],
          [copyAlphabet[j]]: this.alphabet[j].toLowerCase()
        }
      }

      copyAlphabet.push(copyAlphabet.shift())
    }

    return configObject
  }

  encrypt(str, stringKeyword) {
    if (!str || !stringKeyword) return throw new Error('Incorrect arguments');

    const strPreparedArrayWithBreakets = str.split('');
    const preparedArray = strPreparedArrayWithBreakets.filter(el => this.encryptObj.hasOwnProperty(el.toUpperCase()));
    let result = [];

    for (let i = 0; i < preparedArray.length; i++) {
      const currentKeywordIndex = (i < stringKeyword.length) ? i : (i % stringKeyword.length);
      const upperKeywordIndex = stringKeyword[currentKeywordIndex].toUpperCase();
      result.push(this.encryptObj[upperKeywordIndex][preparedArray[i]])
    }

    for (let j = 0; j < str.length; j++) {
      if (this.encryptObj.hasOwnProperty(str[j].toUpperCase())) {
        strPreparedArrayWithBreakets[j] = result.shift();
      }
    }

    return strPreparedArrayWithBreakets.join('');
  }

  decrypt(str, stringKeyword) {
    if (!str || !stringKeyword) return throw new Error('Incorrect arguments');

    const strPreparedArrayWithBreakets = str.split('');
    const preparedArray = strPreparedArrayWithBreakets.filter(el => this.decryptObj.hasOwnProperty(el));
    let result = [];

    for (let i = 0; i < preparedArray.length; i++) {
      const currentKeywordIndex = (i < stringKeyword.length) ? i : (i % stringKeyword.length);
      const upperKeywordIndex = stringKeyword[currentKeywordIndex].toUpperCase();
      result.push(this.decryptObj[upperKeywordIndex][preparedArray[i]])
    }

    for (let j = 0; j < str.length; j++) {
      if (this.encryptObj.hasOwnProperty(str[j].toUpperCase())) {
        strPreparedArrayWithBreakets[j] = result.shift().toUpperCase();
      }
    }

    return strPreparedArrayWithBreakets.join('');
  }
}

class VigenereCipheringMachine extends VigenereCipheringMachineParent {
  constructor(value = true) {
    super(value);

    if (value) {
      this.encrypt = super.encrypt;
      this.decrypt = super.decrypt;
    }
  }

  encrypt(str, stringKeyword) {
    if (!str || !stringKeyword) throw new Error('Incorrect arguments');

    return super.encrypt(str, stringKeyword).split('').reverse().join('');
  }

  decrypt(str, stringKeyword) {
    if (!str || !stringKeyword) throw new Error('Incorrect arguments');

    return super.decrypt(str, stringKeyword).split('').reverse().join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);


console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
module.exports = {
  VigenereCipheringMachine
};
