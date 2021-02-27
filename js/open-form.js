let toggleForm = document.querySelector('.search__form');
let toggleTitle = document.querySelector('.search__link');
let focus = toggleForm.querySelector('#date-first');

toggleTitle.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleForm.classList.toggle('show');
    focus.focus();
});