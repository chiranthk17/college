let display = document.getElementById("box");
let currentInput = "";
let previousInput = "";
let operator = "";

function calc(value) {
  if (value === 'C') {
    // Clear all
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
  } else if (value === '=') {
    // Evaluate the expression
    if (currentInput && previousInput && operator) {
      try {
        let result = eval(previousInput + operator + currentInput);
        display.value = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
      } catch (error) {
        display.value = "Error";
      }
    }
  } else if (['+', '-', '*', '/'].includes(value)) {
    // Operator input
    if (currentInput) {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    }
  } else {
    // Number input
    currentInput += value;
    display.value = currentInput;
  }
}
