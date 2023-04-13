const { NotImplementedError } = require('../extensions/index.js');
const {calculateHanoi} = require('./hanoi-tower');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  for (let i of domains) {
    let value = '';
    const splittingArr = i.split('.');

    for (let i = (splittingArr.length - 1); i >= 0; i--) {
      const currentValue = value + '.' + splittingArr[i] ;

      if (obj.hasOwnProperty(currentValue)) {
        obj[currentValue] = obj[currentValue] + 1;
      } else {
        obj[currentValue] = 1;
      }

      value = currentValue;
    }
  }

  return obj;
}

module.exports = {
  getDNSStats
};
