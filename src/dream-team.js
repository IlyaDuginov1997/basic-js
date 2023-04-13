const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false

  const charactersArr = members.reduce( (acc, el) => {
    if (typeof el === 'string') {
      const preparedEl = el.replace(/\s/g, '');
      acc = [...acc, preparedEl[0].toUpperCase()];
    }

    return acc;
  }, [] );

  if (charactersArr.length) {
    return charactersArr.sort().join('');
  }

  return false;
}

module.exports = {
  createDreamTeam
};
