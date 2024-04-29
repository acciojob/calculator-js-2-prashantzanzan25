const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("btn"));

const calculate = {
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
  "-": (a, b) => a - b,
  "+": (a, b) => a + b,
  "=": (a, b) => b,
};

let currentNumber = "";
let previousNumber = "";
let operator = null;

const updateDisplay = (value) =>