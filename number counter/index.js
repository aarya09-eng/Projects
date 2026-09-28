let count = 0;

function add() {
  count++;
  document.getElementById("no").textContent = count;
}

function sub() {
  count--;
  document.getElementById("no").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("no").textContent = count;
}
