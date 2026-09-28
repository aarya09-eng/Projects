let char = "A";

function add() {
  if (char !== "Z") {
    char = String.fromCharCode(char.charCodeAt(0) + 1);
    document.getElementById("char").textContent = char;
  }
}

function sub() {
  if (char !== "A") {
    char = String.fromCharCode(char.charCodeAt(0) - 1);
    document.getElementById("char").textContent = char;
  }
}

function reset() {
  char = "A";
  document.getElementById("char").textContent = char;
}
