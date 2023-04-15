/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const obj = {};

  for (let i of names) {
    if (obj.hasOwnProperty(i)) {
      obj[i] = obj[i] + 1;
      const newProperty = i + `(${obj[i]})`;
      obj[newProperty] = 0;
      result.push(newProperty)
    } else {
      obj[i] = 0;
      result.push(i)
    }
  }

  return result
}

module.exports = {
  renameFiles
};
