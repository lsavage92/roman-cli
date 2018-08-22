const toArabic = require('roman-numerals').toArabic;

/**
 * This function will parse the users input and return a tuple containing a 
 * stack for the numbers and a stack for arithmetic operators.
 *
 * @param {string} expr 
 */
module.exports = function(expr) {
  return [['numbers'], ['operators']];
};