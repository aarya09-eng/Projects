let convert = document.getElementById("convert");
let output = document.getElementById("output");

let from = document.getElementById("from");
let to = document.getElementById("to");

async function getcurrency() {
  let res = await fetch(
    "https://v6.exchangerate-api.com/v6/c0ba6829004868bd6273742e/latest/USD",
  );

  let c = await res.json();

  console.log(c);

  let currencies = Object.keys(c.conversion_rates);

  currencies.forEach((currency) => {
    from.innerHTML += `<option value="${currency}">${currency}</option>`;
    to.innerHTML += `<option value="${currency}">${currency}</option>`;
  });

  from.value = "USD";
  to.value = "INR";
}

getcurrency();

convert.addEventListener("click", async () => {
  let input = document.getElementById("input").value;

  let fromCurrency = from.value;
  let toCurrency = to.value;

  let res = await fetch(
    "https://v6.exchangerate-api.com/v6/c0ba6829004868bd6273742e/latest/USD",
  );

  let c = await res.json();

  let rates = c.conversion_rates;

  // Convert the entered currency to USD
  let usdAmount = input / rates[fromCurrency];

  // Convert USD to selected currency
  let result = usdAmount * rates[toCurrency];

  output.innerHTML = `${input} ${fromCurrency} = ${result.toFixed(
    2,
  )} ${toCurrency}`;
});
