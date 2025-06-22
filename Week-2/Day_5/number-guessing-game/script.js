let max = 100;
let secretNumber = generateRandomNumber(max);
let attempts = 0;
let maxAttempts = 10;

function generateRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function checkGuess() {
  const input = document.getElementById("guessInput").value;
  const guess = parseInt(input);
  const feedback = document.getElementById("feedback");

  // Validate input
  if (isNaN(guess) || guess < 1 || guess > max) {
    feedback.textContent = `Please enter a number between 1 and ${max}.`;
    return;
  }

  attempts++;
  updateAttemptsInfo();

  // Game over condition
  if (attempts >= maxAttempts && guess !== secretNumber) {
    feedback.textContent = `Game over. The number was ${secretNumber}.`;
    disableGame();
    return;
  }

  // Check guess
  if (guess < secretNumber) {
    feedback.textContent = "Too low. Try again.";
  } else if (guess > secretNumber) {
    feedback.textContent = "Too high. Try again.";
  } else {
    feedback.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
    disableGame();
  }
}

function resetGame() {
  secretNumber = generateRandomNumber(max);
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("attemptsInfo").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.querySelector("button[onclick='checkGuess()']").disabled = false;
}

function setDifficulty() {
  max = parseInt(document.getElementById("difficulty").value);
  document.getElementById("rangeDisplay").textContent = max;
  resetGame();
}

function updateAttemptsInfo() {
  const info = document.getElementById("attemptsInfo");
  info.textContent = `Attempt ${attempts} of ${maxAttempts}`;
}

function disableGame() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button[onclick='checkGuess()']").disabled = true;
}
