const indexTitle = document.querySelector("#indexTitle");
const titleOfDetailRecipe = document.querySelector("#recipeTitle");
const ingredientsOfDetailRecipe = document.querySelector("#ingredientsList");
const instructionsOfDetailRecipe = document.querySelector(
  "#instructionsForRecipe"
);

const params = new URLSearchParams(document.location.search);
const recipeID = parseInt(params.get("id"));

const ingredientHTML = (ingredient, index) =>
  `<li class="each-ing" id="ingredient-${index}">${ingredient}</li>`;

document.addEventListener("DOMContentLoaded", () => {
  const recentImageDataUrl = localStorage.getItem("recent-image");
  if (recentImageDataUrl) {
    document
      .querySelector("#imgRecipe")
      .setAttribute("src", recentImageDataUrl);
  }
});

const showRecipeDetail = (recipeID) => {
  const recipe = getRecipeByID(recipeID);
  indexTitle.innerHTML = `Detalle - ${recipe.title}`;
  titleOfDetailRecipe.innerHTML = recipe.title;
  instructionsOfDetailRecipe.innerHTML = recipe.instructions;
  ingredientsOfDetailRecipe.innerHTML = recipe.ingredients
    .map(ingredientHTML)
    .join("");
};

showRecipeDetail(recipeID);
