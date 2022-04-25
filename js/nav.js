const sidebar = document.querySelector("#sidebar");
const navToggle = document.querySelector("#toggle-btn");

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