const add = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}

const divide = (a, b) => {
  if (a === 0 || b === 0) { return 0 }
  return a / b
}

const multiply = (a, b) => {
  return a * b
}

module.exports = { add, subtract, divide, multiply }
