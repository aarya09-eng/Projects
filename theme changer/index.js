function dark() {
  let btn = document.querySelector("button");
  btn.classList.add("theme");
  document.body.classList.add("theme");
}

function light() {
  let btn = document.querySelector("button");
  btn.classList.remove("theme");
  document.body.classList.remove("theme");
}
