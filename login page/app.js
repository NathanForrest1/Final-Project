// User credentials
const validUsername = "User1";
const validPassword = "P@ssWord";

// Login function
document.getElementById("login-btn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === validUsername && password === validPassword) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("menu-section").style.display = "block";
    startSessionTimer();
  } else {
    document.getElementById("login-error").textContent =
      "Invalid username or password.";
  }
});

// Session Timer
let loginTime;
function startSessionTimer() {
  loginTime = new Date();
  setInterval(function () {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - loginTime) / 1000);
    document.getElementById(
      "timer"
    ).textContent = `Session Time: ${elapsedTime} seconds`;
  }, 1000);
}

// Redirect to Calculator
document.getElementById("calculator-btn").addEventListener("click", function() {
    window.location.href = "../calculator/index.html"; // Relative path to the calculator folder
});

// Redirect to Tic-Tac-Toe
document.getElementById("tictactoe-btn").addEventListener("click", function() {
    window.location.href = "../ticTacToe/index.html"; // Relative path to the tic-tac-toe folder
});
