const addButton = document.querySelector("#add-btn");
const sliderBurger = document.querySelector("#burger-btn")
const detailedRecipe = document.querySelector("#detailed-recipe");
const modalForm = document.querySelector("#modal-form");
const titleForm = document.querySelector("#title-form");
const sourceForm = document.querySelector("#source-form");
const pictureForm = document.querySelector("#picture-form");
const ingredientsForm = document.querySelector("#ingredients-form");


addButton.addEventListener("click", event => {
    event.preventDefault();
    recipeForm();
});

const recipeForm = () => {
    document.body.innerHTML = form;
}
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




(function() {
    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav-corner'),
      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  }());

modalForm.addEventListener("submit", event => {
    event.preventDefault();
    checkInputs();
})
const checkInputs = () => {
    const titleValue = titleForm.value.trim();
    const sourceValue = sourceForm.value.trim();
    const ingredientsValue = ingredientsForm.value.trim();

    if(titleValue === '') {
        setErrorFor(titleForm, 'Cannot be blank!')

    } else {
        setSuccessFor(titleForm)
    };
    
    if(sourceValue === '') {
        setErrorFor(sourceForm, 'Cannot be blank!')

    } else {
        setSuccessFor(sourceForm)
    };

    if(ingredientsValue === '') {
        setErrorFor(ingredientsForm, 'Cannot be blank!')

    } else {
        setSuccessFor(ingredientsForm)
    };

}

const setErrorFor = (input, message) => {
    const formBox = input.parentElement;
    const small = formBox.querySelector('small');
    small.innerText = message;
    formBox.className = 'form-box error'
};

const setSuccessFor = (input) => {
    const formBox = input.parentElement;
    formBox.className = 'form-box success'
}