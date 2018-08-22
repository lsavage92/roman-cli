/**
 * This application expects a series of roman numerals in postfix notation.
 * It will calculate from left to right. Input should look something like this:
 *
 * XIV V M + L *
 *
 * Numerals and operators are space delimited.
 */
const parseArithmetic = require('./src/parse-arithmetic');
const expr = process.argv.slice(2);

/**
 * This will be the parsed input to loop over and begin calculations.
 */
let parsedInput = parseArithmetic(expr);
