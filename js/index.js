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

sliderBurger.addEventListener("click", event => {
    event.preventDefault();
    openNav();
    sliderHTML();
    closeNav();
});
const html = `<div class="slider-container">
<div class="slider-square">
   <div class="logo-container">
    <img onclick="closeNav()"id="close-slider" class="exit" src="/assets/img/exit.svg" alt="cross exit">
    </div>
    <div class="slider-title">Our Recipes</div>
    <ul class="slider-opts">
        <a href="/recipes/recipe1.html" class="recipe hover-underline-animation">Mushroom Soup</a>
        <a href="/recipes/recipe2.html" class="recipe hover-underline-animation">Croatian Bean Stew</a>
        <a href="/recipes/recipe3.html" class="recipe hover-underline-animation">Ratatouille</a>

    </div>
</div>
</div>`

const sliderHTML = () => {
    document.body.innerHTML = html;
}


const openNav = () => {
    sliderBurger.style.width = "20%";
}

const closeNav = () => {
    sliderBurger.style.width = "0";
}

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