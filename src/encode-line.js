/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (!str.length) return '';

  const strArr = str.split('');

  let countOfSameValues = 1;
  let resString = '';

  for (let i = 1; i < strArr.length; i++) {
    console.log(strArr[i])

    if (strArr[i] === strArr[i - 1]) {
      countOfSameValues++;
      continue
    }

    const repeatCount = (countOfSameValues === 1) ? '' : countOfSameValues;
    resString = resString + repeatCount + strArr[i-1];

    countOfSameValues = 1;
  }

  const repeatOutsideCount = (countOfSameValues === 1) ? '' : countOfSameValues;
  return resString + repeatOutsideCount + strArr[strArr.length - 1];
}

module.exports = {
  encodeLine
};
