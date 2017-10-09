const addition = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => {
  return a - b;
};

const multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

const operations = [
  {
    operand: "+",
    operation: addition
  },
  {
    operand: "-",
    operation: subtraction
  },
  {
    operand: "x",
    operation: multiplication
  },
  {
    operand: "/",
    operation: division
  }
];

export default operations;