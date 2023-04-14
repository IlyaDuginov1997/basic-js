/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'  } =  options;

  addition = String(addition);

  let subAdditionPart = [addition];
  for (let i = 1; i < additionRepeatTimes; i++) {
    subAdditionPart = [...subAdditionPart, addition];
  }

  const preparedSubAddition = subAdditionPart.join(additionSeparator);

  let additionPart = [str + preparedSubAddition];
  for (let i = 1; i < repeatTimes; i++) {
    additionPart = [...additionPart, str + preparedSubAddition]
  }

  return additionPart.join(separator);

}

module.exports = {
  repeater
};
