function operate(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

console.log("Addition", operate(10, 4, add));
console.log("multiply", operate(10, 4, multiply));
console.log("divide", operate(10, 4, divide));
console.log("subtract", operate(10, 4, subtract));
