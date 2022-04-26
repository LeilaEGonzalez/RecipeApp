// --------------- SELECTORS -------------- //

const addButton = document.querySelector("#add-btn");
const modalForm = document.querySelector("#modal-form");
const titleForm = document.querySelector("#title-form");
const instructionsForm = document.querySelector("#instructions-form");
const ingredientsForm = document.querySelector("#ingredients-form");
const modalContainer = document.querySelector("#modalContainer");
const recipeImage = document.querySelector("#recipe-image");
const closeButton = document.querySelector("#closeBtn");

// --------------- LISTENERS -------------- //

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  showRecipeForm();
});

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  closeRecipeForm();
});
// --------------- FORM -------------- //

let lastIngredientRowID = 0;

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

const validate = (input) => {
  const value = input.value.trim();
  if (!value) {
    setErrorFor(input, `${getFieldName(input)} cannot be blank`);
  } else {
    setSuccessFor(input);
  }

  return value;
};

const handleNewRecipe = (recipe) => {
  const recipeID = addRecipe(recipe);
  showNewRecipe({ ...recipe, id: recipeID });
};

const getIngredientValues = () => {
  const inputs = document.querySelectorAll("#ingredients-form input");
  const values = [];
  inputs.forEach((input) => {
    values.push(input.value);
  });
  return values;
};

const checkInputs = () => {
  const title = validate(titleForm);
  const instructions = validate(instructionsForm);
  const image = recipeImage.files[0];
  const ingredients = getIngredientValues();
  const isValid = title && instructions && ingredients.length > 0;
  if (isValid)
    handleNewRecipe({
      title,
      instructions,
      image,
      ingredients,
    });
};

// --------------- UI -------------- //

const showRecipeForm = () => {
  modalContainer.style.display = "block";
  lastIngredientRowID = 0;
};

const closeRecipeForm = () => {
  modalContainer.style.display = "none";
};

const setErrorFor = (input, message) => {
  const formBox = input.parentElement;
  const small = formBox.querySelector("small");
  small.innerText = message;
  formBox.className = "form-box error";
};

const setSuccessFor = (input) => {
  const formBox = input.parentElement;
  formBox.className = "form-box success";
};

const showNewRecipe = (recipe) => {
  siderbarUl.insertAdjacentHTML("beforeend", sideMenuHTML(recipe));
};

const handleAddIngredient = () => {
  const ingredientHTML = ingredientRow(++lastIngredientRowID);
  ingredientsForm.insertAdjacentHTML("beforeend", ingredientHTML);
};

const deleteIngredientRow = (rowID) => {
  const row = document.getElementById(`ingredient-row-${rowID}`);
  row.remove();
};

const ingredientRow = (rowID) => {
  return `<div id="ingredient-row-${rowID}">
            <input
              type="text"
              placeholder="Write Here..."
              id="ingredient-input-${rowID}"
            />
            <button type="button" onclick="deleteIngredientRow(${rowID})" id="ingredient-delete-${rowID}">delete</button>
          </div>`;
};
