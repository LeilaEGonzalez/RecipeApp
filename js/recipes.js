const savedRecipeKey = "recipe";
const recipesLastIDKey = "recipesLastID";

const siderbarUl = document.querySelector("#siderbarUl");

const getRecipesFromLocalStorage = () =>
  getItemLocalStorage(savedRecipeKey, []);

const renderRecipes = () => {
  const recipes = getRecipesFromLocalStorage();
  const recipesHTML = recipes.map(sideMenuHTML).join("");
  siderbarUl.innerHTML = recipesHTML;
};

const addRecipe = (recipe) => {
  const recipes = getRecipesFromLocalStorage();
  const recipesLastID = getItemLocalStorage(recipesLastIDKey, 0);
  const newID = recipesLastID + 1;
  const newRecipe = { ...recipe, id: newID };
  recipes.push(newRecipe);
  setItemToLocalStorage(savedRecipeKey, recipes);
  setItemToLocalStorage(recipesLastIDKey, newID);
  return newID;
};

const getRecipeByID = (recipeID) => {
  const recipes = getRecipesFromLocalStorage();
  const recipe = recipes.find((rec) => rec.id === recipeID);
  return recipe;
};

const sideMenuHTML = (recipe) =>
  `<li class="sidebar_li"><a href="/recipes/recipeDetail.html?id=${recipe.id}">${recipe.title}</a></li>`;

renderRecipes();
