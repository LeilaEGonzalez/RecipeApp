const indexTitle = document.querySelector("#indexTitle");
const imgOFDetailRecipe = document.querySelector("#imgRecipe");
const titleOfDetailRecipe = document.querySelector("#recipeTitle");
const ingredientsOfDetailRecipe = document.querySelector("#ingredientsList");
const instructionsOfDetailRecipe = document.querySelector(
  "#instructionsForRecipe"
);

const params = new URLSearchParams(document.location.search);
const recipeID = parseInt(params.get("id"));

const ingredientHTML = (ingredient, index) =>
  `<li class="each-ing" id="ingredient-${index}">${ingredient}</li>`;

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
