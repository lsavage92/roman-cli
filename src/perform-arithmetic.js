const { arithmeticOperators } = require('./parse-input');

/**
 * Performs basic math operations based on inputs.
 *
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * @returns {number}
 */
const doMath = function(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw `Unexpected operator ${operator}.`;
  }

  return result;
};

/**
 * Loops over all input, performs math and returns result.
 *
 * @param {array} parts
 */
module.exports = function(parts) {
  let stack = [];
  parts.forEach((part, idx) => {
    if (!arithmeticOperators[part]) {
      stack.push(part);
    } else {
      let operand2 = stack.pop();
      let operand1 = stack.pop();
      let operator = part;
      stack.push(doMath(operand1, operand2, operator));
    }
  })

  return stack.pop();
};
