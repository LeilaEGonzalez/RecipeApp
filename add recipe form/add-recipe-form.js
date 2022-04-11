const form = document.querySelector("#form");
const titleForm = document.querySelector("#title-form");
const sourceForm = document.querySelector("#source-form");
const pictureForm = document.querySelector("#picture-form");
const ingredientsForm = document.querySelector("#ingredients-form");

form.addEventListener("submit", event => {
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