const indexTitle = document.querySelector("#indexTitle");
const imgOFDetailRecipe = document.querySelector("#imgRecipe");
const titleOfDetailRecipe = document.querySelector("#recipeTitle");
const ingredientOfDetailRecipe = document.querySelector("#ingredient");
const instructionsOfDetailRecipe = document.querySelector(
  "#instructionsForRecipe"
);

const params = new URLSearchParams(document.location.search);
const recipeID = parseInt(params.get("id"));

const showRecipeDetail = (recipeID) => {
  const recipe = getRecipeByID(recipeID);
  indexTitle.innerHTML = `Detalle - ${recipe.title}`;
  titleOfDetailRecipe.innerHTML = recipe.title;
  instructionsOfDetailRecipe.innerHTML = recipe.instructions;
};

showRecipeDetail(recipeID);
