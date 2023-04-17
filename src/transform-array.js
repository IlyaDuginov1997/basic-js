/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  }

  const copyArr = [...arr];
  const resultArr = [];

  for (let i = 0; i < copyArr.length; i++) {
   switch (arr[i]) {
     case '--discard-next':
       if (!copyArr[i + 1]) break
       copyArr[i + 1] = null;
       break
     case '--discard-prev':
       if (!copyArr[i - 1]) break
       resultArr[i - 1] = null;
       break
     case '--double-next':
       if (!copyArr[i+1]) break
       resultArr.push(copyArr[i+1]);
       break
     case '--double-prev':
       if (!copyArr[i-1]) break
       resultArr.push(copyArr[i-1]);
       break
     default:
       resultArr.push(copyArr[i]);
   }
 }

 return resultArr.filter(el => el !== null);
}

module.exports = {
  transform
};
