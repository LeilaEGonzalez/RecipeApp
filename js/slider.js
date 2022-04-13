const html = `<div class="slider-container">
<div class="slider-square">
   <div class="logo-container">
    <img class="slider-burger" src="/assets/img/burger.svg" alt="burger icon">
    <div class="slider-logo hover-underline-animation">Recipe App</div>
    </div>
    <div class="slider-title">Our Recipes</div>
    <ul class="slider-opts">
        <a href="/recipes/recipe1.html" class="recipe hover-underline-animation">Mushroom Soup</a>
        <a href="/recipes/recipe2.html" class="recipe hover-underline-animation">Croatian Bean Stew</a>
        <a href="/recipes/recipe3.html" class="recipe hover-underline-animation">Ratatouille</a>

    </div>
</div>
</div>`

export default sliderHTML = () => {
    document.body.innerHTML = html;
}

