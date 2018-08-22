/**
 * This application expects a string of roman numerals in a lisp-like postfix notation.
 * It will calculate from the innermost parenthesis outwards. Input should look something like this:
 *
 * XIV V M + L *
 *
 * Numerals and operators are space delimited.
 */
const parseArithmetic = require('./src/parse-arithmetic');
const expr = process.argv.slice(2)[0];

/**
 * numberStack will hold arrays of numeric types to perform operations on.
 * operatorStack will hold strings representing the arithmetic operation to apply.
 */
let [ numberStack, operatorStack ] = parseArithmetic(expr);
