let convert = document.getElementById("convert");
let output = document.getElementById("output");

convert.addEventListener("click", async () => {
  let input = document.getElementById("input");
  let res = await fetch(
    ` https://v6.exchangerate-api.com/v6/c0ba6829004868bd6273742e/latest/USD`,
  );

  let c = await res.json();

  console.log(c);
});
