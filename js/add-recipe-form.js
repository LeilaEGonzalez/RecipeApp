export const titleForm = document.querySelector("#title-form");
export const sourceForm = document.querySelector("#source-form");
export const pictureForm = document.querySelector("#picture-form");
export const ingredientsForm = document.querySelector("#ingredients-form");

// modalForm.addEventListener("submit", event => {
//     event.preventDefault();

//     checkInputs();
// })

export const checkInputs = () => {
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

export const setErrorFor = (input, message) => {
    const formBox = input.parentElement;
    const small = formBox.querySelector('small');
    small.innerText = message;
    formBox.className = 'form-box error'
};

export const setSuccessFor = (input) => {
    const formBox = input.parentElement;
    formBox.className = 'form-box success'
}