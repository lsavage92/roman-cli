/**
 * This application expects a string of roman numerals in postfix notation.
 * Input should look something like this:
 *
 * 'XIV V M + L *'
 *
 * Numerals and operators are space delimited.
 */
const parseInput = require('./src/parse-input');
const performArithmetic = require('./src/perform-arithmetic');
const expr = process.argv.slice(2)[0];

/**
 * This will be the parsed input to loop over and begin calculations.
 */
let parsedInput = parseInput(expr.split(' '));

const result = performArithmetic(parsedInput);

// Write results to console.
process.stdout.write(`${String(result)}\n`);
