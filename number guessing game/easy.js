let guess = Math.floor(Math.random() * 100 + 1);
let attempts = 10;

function checkguess() {
  let num = Number(document.querySelector("#checkinput").value);

  if (num == guess) {
    document.getElementById("message").innerText = "🎉 Correct! You Won!";
  } else if (guess > num) {
    document.getElementById("message").innerText = "Higher!";

    attempts--;
  } else if (guess < num) {
    document.getElementById("message").innerText = "Lower!";
    attempts--;
  }

  document.getElementById("attempts").innerText = "Attempts: " + attempts;

  if (attempts == 0) {
    document.getElementById("attempts").innerText =
      "Game Over! the number was " + guess;
  }
}
