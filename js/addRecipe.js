// --------------- SELECTORS -------------- //

const addButton = document.querySelector("#add-btn");
const modalForm = document.querySelector("#modal-form");
const titleForm = document.querySelector("#title-form");
const sourceForm = document.querySelector("#source-form");
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
  addRecipe(recipe);
  showNewRecipe(recipe);
};

const checkInputs = () => {
  const title = validate(titleForm);
  const source = validate(sourceForm);
  const ingredients = validate(ingredientsForm);
  const image = recipeImage.files[0];
  const isValid = title && source && ingredients;
  if (isValid) handleNewRecipe({ title, source, ingredients, image });
};

// --------------- UI -------------- //

const showRecipeForm = () => {
  modalContainer.style.display = "block";
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
