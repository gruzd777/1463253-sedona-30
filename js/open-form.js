const toggleForm = document.querySelector('.search__form');
const toggleTitle = document.querySelector('.search__link');
const focus = toggleForm.querySelector('#date-first');
const formInput = toggleForm.querySelector('.search__input');
const formButton = toggleForm.querySelector('.search__button');

toggleForm.classList.add('hide');

toggleTitle.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleForm.classList.toggle('hide');
    focus.focus();
    if (toggleForm.classList.contains('error')) {
        toggleForm.classList.remove('error');
    };
});

window.addEventListener('keydown', function (event) { 
    if (event.code === 'Escape') { 
        toggleForm.classList.remove('error');

        if (!toggleForm.classList.contains('hide')) {
            event.preventDefault();
            toggleForm.classList.add('hide');
        };
    };
});

toggleForm.addEventListener('submit', function (evt) {
    if (!formInput.value) {
        evt.preventDefault();
        toggleForm.classList.remove('error');
        toggleForm.offsetWidth = toggleForm.offsetWidth;
        toggleForm.classList.add('error');
    };
});


