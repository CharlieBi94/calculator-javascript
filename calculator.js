const operatorType = ["-", "+", "*", "/"];

function operate(left, operator, right) {
  switch (operator) {
    case operatorType[0]:
      return left - right;
    case operatorType[1]:
      return left + right;
    case operatorType[2]:
      return left * right;
    case operatorType[3]:
      return left / right;
    default:
      console.log("Invalid operator.");
  }
}

// Setup calculator behaviour
// Order the inputs from player into an arry
let inputQueue = {};
let currentInput = 0;

function AddInput(input) {}
