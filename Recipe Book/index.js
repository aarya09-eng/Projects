let searchbtn = document.getElementById("search");
let output = document.getElementById("output");

searchbtn.addEventListener("click", async () => {
  let recipe = document.getElementById("recipe").value;

  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`,
  );

  let r = await res.json();

  console.log(r);

  if (r.meals == null) {
    output.innerHTML = "<h2>Recipe not found</h2>";
    return;
  }

  let meal = r.meals[0];

  let Ingredients = "";

  for (let i = 1; i <= 20; i++) {
    let ingredient = meal[`strIngredient${i}`];
    let measure = meal[`strMeasure${i}`];

    if (ingredient != "") {
      Ingredients += `
        <li>${measure} ${ingredient}</li>
      `;
    }
  }

  output.innerHTML = `

    <div id="title">

      <h2>${meal.strMeal}</h2>

      <h3>Country : ${meal.strCountry}</h3>

      <h3>Area : ${meal.strArea}</h3>

    </div>

    <div id="img">

      <img src="${meal.strMealThumb}" />

    </div>

    <div id="ingredients">

      <h2>Ingredients</h2>

      <ul>
        ${Ingredients}
      </ul>

      <h2>Instructions</h2>

      <p>${meal.strInstructions}</p>

    </div>


     <div id="links">

      <a href="${meal.strYoutube}" target="_blank">
        Watch Recipe Video
      </a>

      <br>

      <a href="${meal.strSource}" target="_blank">
        Original Recipe
      </a>

    </div>

  `;
});
