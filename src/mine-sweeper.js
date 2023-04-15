/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const emptyMinesArray = [];

  for (let i = 0; i < matrix.length; i++) {
    emptyMinesArray.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      emptyMinesArray[i][j] = 0;

      //top
      if (!!matrix[i - 1]) {
        if (matrix[i - 1][j]) {
          emptyMinesArray[i][j]++;
        }
      }

      //bottom
      if (!!matrix[i + 1]) {
        if (matrix[i + 1][j]) {
          emptyMinesArray[i][j]++;
        }
      }

      //left
      if (matrix[i][j-1]) {
        emptyMinesArray[i][j]++;
      }

      //right
      if (matrix[i][j+1]) {
        emptyMinesArray[i][j]++;
      }

      //top-left
      if (!!matrix[i - 1]) {
        if (matrix[i - 1][j-1]) {
          emptyMinesArray[i][j]++;
        }
      }

      //top-right
      if (!!matrix[i - 1]) {
        if (matrix[i - 1][j+1]) {
          emptyMinesArray[i][j]++;
        }
      }

      //bottom-left
      if (!!matrix[i + 1]) {
        if (matrix[i + 1][j-1]) {
          emptyMinesArray[i][j]++;
        }
      }

      //bottom-right
      if (!!matrix[i + 1]) {
        if (matrix[i + 1][j+1]) {
          emptyMinesArray[i][j]++;
        }
      }
    }
  }

  return emptyMinesArray;
}

module.exports = {
  minesweeper
};
