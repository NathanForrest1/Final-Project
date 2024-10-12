function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function togglePositiveNegative() {
  const display = document.getElementById("display");
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1); // Remove the negative sign
  } else if (display.value) {
    display.value = "-" + display.value; // Add the negative sign
  }
}

function convertToPercent() {
  const display = document.getElementById("display");
  if (display.value !== "") {
    display.value = parseFloat(display.value) / 100; // value divide by 100
  }
}

let seconds = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    document.getElementById("timer").innerText = `Session Time: ${seconds}s`;
  }, 1000);
}

// Call startTimer() after login or when the calculator is loaded
startTimer();

