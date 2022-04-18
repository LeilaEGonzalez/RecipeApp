const addButton = document.querySelector("#add-btn");
const sliderBurger = document.querySelector("#slider_burger");
const detailedRecipe = document.querySelector("#detailed-recipe");
const modalForm = document.querySelector("#modal-form");
const titleForm = document.querySelector("#title-form");
const sourceForm = document.querySelector("#source-form");
const pictureForm = document.querySelector("#picture-form");
const ingredientsForm = document.querySelector("#ingredients-form");

const show = () => {
  document.getElementById("sidebar").classList.toggle("active");
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  recipeForm();
});

const recipeForm = () => {
  document.body.innerHTML = form;
};

const form = `    <div id="overlay"></div>
<div class="modal-container" id="form-container">
            <div class="modal-header">
        <div class="modal-title">New Recipe</div>
        <button class="close-button">&times;</button>
    </div>
    <div class="modal-body">
        <form class="form" id="form">
            <div class="form-box">
            <label>Title</label>
            <input type="text" placeholder="Write Here..." id="title-form">
            <i class="fa-solid fa-circle-exclamation"></i>
            <i class="fa-solid fa-circle-check"></i>
            <small>Error</small>
        </div>

        <div class="form-box">
            <label>Source</label>
            <input type="text" placeholder="Write Here..." id="source-form">
            <i class="fa-solid fa-circle-exclamation"></i>
            <i class="fa-solid fa-circle-check"></i>
            <small>Error</small>
        </div>

        <div class="form-box">
            <label>Picture</label>
            <input type="text" placeholder="" id="picture-form">
            <i class="fa-solid fa-file-circle-plus"></i>
            <i class="fa-solid fa-circle-check"></i>
            <small>Error</small>
        </div>

        <div class="form-box">
            <label>Ingredients</label>
            <input class="ingredients-input" type="text" placeholder="Write Here..." id="ingredients-form">
            <i class="fa-solid fa-circle-exclamation"></i>
            <i class="fa-solid fa-circle-check"></i>
            <small>Error</small>
        </div>

        <button class="form-btn">Submit</button>

        </form>
    </div>
</div>`;

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  validate(titleForm);
  validate(sourceForm);
  validate(ingredientsForm);
};

const validate = (input) => {
  const value = input.value.trim();
  if (!value) {
    setErrorFor(input, `${getFieldName(input)} cannot be blank`);
  } else {
    setSuccessFor(input);
  }
};

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
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
