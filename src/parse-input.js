const toArabic = require('roman-numerals').toArabic;

/**
 * A map of available arithmetic operations. A map was used for constant
 * time lookup instead of iterating on an array.
 */
const arithmeticOperators = {
  '+': true,
  '-': true,
  '*': true,
  '/': true
};

/**
 * This function will parse the users input and return an array of
 * the input with parsed roman numeral values.
 *
 * @param {array} expr 
 * @returns {array}
 */
module.exports = function(expr) {
  return expr.map((part) => {
    if (arithmeticOperators[part]) {
      return part;
    } else {
      /**
       * If we end up with an odd part that is not a numeral, or some
       * user input error, the library should throw an error.
       */
      let num = toArabic(part.toUpperCase());
      return num;
    }
  });
};

module.exports.arithmeticOperators = arithmeticOperators;
