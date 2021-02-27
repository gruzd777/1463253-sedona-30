let toggleForm = document.querySelector('.search__form');
let toggleTitle = document.querySelector('.search__link');

toggleTitle.addEventListener('click', function () {
    toggleForm.classList.toggle('show');
});