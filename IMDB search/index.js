let searchbtn = document.getElementById("search");
let output = document.getElementById("output");

searchbtn.addEventListener("click", async () => {
  let input = document.getElementById("input").value;

  let res = await fetch(`https://www.omdbapi.com/?t=${input}&apikey=8b6ec8b2`);

  let m = await res.json();

  console.log(m);

  output.innerHTML = `
        <h2>${m.Title}</h2>

        <p>${m.Released} ${m.Runtime} >${m.imdbRating}</p>

        
        <img src="${m.Poster}"/>
        <p id="gen">${m.Genre}</p>

        <p> >${m.Plot}</p>

        <ul type="none">
        <hr>
            <li>Director   : ${m.Director}</li>
            <hr>
            <li>Actors     : ${m.Actors}</li>
           <hr>
            <li>BoxOffice  : ${m.BoxOffice}</li>
            <hr>
            <li>Languge    : ${m.Language}</li>
            <hr>
            <li>Awards     : ${m.Awards}</li>
        </ul>
    `;
});
