/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const onRowLength = matrix[0].length;

  const arrayOfIndexes = {};
  let sum = 0;

  for (let i = 0; i < onRowLength; i++) {
    arrayOfIndexes[i] = i;
  }

  for (let i of matrix) {
    const currentParentEl = i;

    for (let j = 0; j < currentParentEl.length; j++) {
      if (currentParentEl[j] === 0) {
        delete arrayOfIndexes[j];
        continue
      }

      if (arrayOfIndexes.hasOwnProperty(j)) {
        sum = sum + currentParentEl[j];
      }
    }
  }

  return  sum;
}

module.exports = {
  getMatrixElementsSum
};
