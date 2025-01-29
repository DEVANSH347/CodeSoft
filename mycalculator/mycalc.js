let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(num) {
  currentNumber += num;
  document.getElementById('display').value = currentNumber;
}

function setOperator(op) {
  if (currentNumber === '') return;
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculateResult() {
  if (previousNumber === '' || currentNumber === '' || operator === '') return;
  const result = eval(`${previousNumber} ${operator} ${currentNumber}`);
  document.getElementById('display').value = result;
  currentNumber = result;
  previousNumber = '';
  operator = '';
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  document.getElementById('display').value = 0;
}