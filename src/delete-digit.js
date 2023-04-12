const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const origArray = String(n).split('').map(Number);
  let arr = [];

  for (let i = 0; i < origArray.length; i++) {
    const copyArr = [...origArray];
    const a = copyArr.splice(i, 1);
    console.log(a)
    arr = [...arr, copyArr.join('')];
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
