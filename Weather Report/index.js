let searchbtn = document.getElementById("search");
let output = document.getElementById("output");

searchbtn.addEventListener("click", async () => {
  let citybtn = document.getElementById("city").value;

  let res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5a1cd4011574492392684636260210&q=${citybtn}`,
  );

  let w = await res.json();

  console.log(w);

  output.innerHTML = `
   <h2>${w.location.name}</h2>
   <h3>${w.location.region}</h3>

  <div id="img">

   <img src= "${w.current.condition.icon}" />

   <p>${w.current.condition.text}</p>

   </div>


    <div id="prop">
        <ul>
  <li>Temperature: ${w.current.temp_c} °C</li>
  <li>Temperature: ${w.current.temp_f} °F</li>
  <li>Humidity: ${w.current.humidity}%</li>
  <li>Wind: ${w.current.wind_kph} km/h</li>
  <li>Wind Direction: ${w.current.wind_dir}</li>
  <li>UV Index: ${w.current.uv}</li>
  <li>Precipitation: ${w.current.precip_mm} mm</li>
  <li>Rain: ${w.current.will_it_rain ? "Yes" : "No"}</li>
  <li>Cloud: ${w.current.cloud}%</li>
  <li>Updated: ${w.current.last_updated}</li>
</ul>
       
    </div>

    
  `;
});

async function getcitytemp(city, id) {
  let res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5a1cd4011574492392684636260210&q=${city}`,
  );

  let d = await res.json();

  document.getElementById(id).innerHTML = `${d.current.temp_c} °C`;
}

getcitytemp("Mumbai", "mumbai");
getcitytemp("London", "london");
getcitytemp("New York", "newyork");
getcitytemp("Tokyo", "tokyo");
