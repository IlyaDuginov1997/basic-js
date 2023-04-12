const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sameCharacters = 0;

  const createObj = (str) => {
    const obj = {};

    for (i of str) {
      if (obj.hasOwnProperty(i)) {
        obj[i]++
      } else {
        obj[i] = 1;
      }
    }

    return obj;
  }

  const firstStringObj = createObj(s1);
  const secondStringObj = createObj(s2);

  for (i in firstStringObj) {
    if (!secondStringObj.hasOwnProperty(i)) continue
    sameCharacters = sameCharacters + Math.min(firstStringObj[i], secondStringObj[i]);
  }

  return sameCharacters;
}

module.exports = {
  getCommonCharacterCount
};
