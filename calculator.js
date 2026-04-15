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
const calculatorDisplay = document.getElementById("calc-display");
const calculator = document.getElementById("calculator");
// Order the inputs from player into an arry
let inputQueue = [];
let newNumber = false;

function setDisplay(value) {
  //Check if new value is valid
  const newValue = parseFloat(value);
  if (newValue == NaN) return;
  calculatorDisplay.value = newValue;
}

function addInput(input) {}

function handleInput(event) {
  const classList = event.target.classList;
  //console.log(classList);
  if (classList.contains("number-button")) {
    //Just concatenating strings
    if (!newNumber) {
      setDisplay(calculatorDisplay.value + event.target.value);
    } else {
      setDisplay(event.target.value);
      newNumber = false;
    }
  } else if (classList.contains("calc-button")) {
    // Check if we need to calculate something immediately
    if (event.target.value == "=") {
      calculateFromQueue();
    } else if (inputQueue.length == 0) {
      inputQueue.push(calculatorDisplay.value);
      inputQueue.push(event.target.value);
      newNumber = true;
    } else if (inputQueue.length > 0) {
      // Checks to see if user just inputted an operator (if so, just swap prev operator with current selection)
      if (newNumber) {
        if (operatorType.includes(event.target.value)) {
          inputQueue[1] = event.target.value;
        }
      } else {
        calculateFromQueue();
      }
    }
  } else if (classList.contains("clear-button")) {
    setDisplay("0");
    clearQueue();
  }
}

function calculateFromQueue() {
  setDisplay(
    operate(
      parseFloat(inputQueue[0]),
      inputQueue[1],
      parseFloat(calculatorDisplay.value),
    ),
  );
  clearQueue();
}

function clearQueue() {
  let n = inputQueue.length;
  for (let i = 0; i < n; i++) {
    inputQueue.shift();
  }
}

calculator.addEventListener("click", handleInput, true);
