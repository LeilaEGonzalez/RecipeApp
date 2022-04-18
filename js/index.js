const addButton = document.querySelector("#add-btn");
const sidebar = document.querySelector("#sidebar");
const navToggle = document.querySelector("#toggle-btn");
const modalForm = document.querySelector("#modal-form");
const titleForm = document.querySelector("#title-form");
const sourceForm = document.querySelector("#source-form");
const pictureForm = document.querySelector("#picture-form");
const ingredientsForm = document.querySelector("#ingredients-form");

navToggle.addEventListener('click', () => {
  const visibility = sidebar.getAttribute('data-visible')
  if (visibility === "false") {
    sidebar.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navToggle.style.background = "url(/assets/img/exit.svg)"
    navToggle.style.backgroundRepeat = "no-repeat";
  } else if (visibility === "true") {
    sidebar.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.style.background = "url(/assets/img/burger.svg)"
  }
})

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
        <form class="form" id="modal-form">
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
                <label>Ingredients</label>
                <input type="text" placeholder="Write Here..." id="ingredients-form">
                <i class="fa-solid fa-circle-exclamation"></i>
                <i class="fa-solid fa-circle-check"></i>
                <small>Error</small>
            </div>
            
            <div class="form-box">
                <label for="picture-recipe">Picture</label>
                <input type="file" id="recipe-image" name="file" accept="image/png, image/jpeg">
                <i class="fa-solid fa-file-circle-plus"></i>
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

const imageRecipe = document.querySelector('#recipe-image')
imageRecipe.addEventListener('change', updateImageDisplay);