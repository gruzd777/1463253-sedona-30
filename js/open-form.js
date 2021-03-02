const toggleForm = document.querySelector('.search__form');
const toggleTitle = document.querySelector('.search__link');
const focus = toggleForm.querySelector('#date-first');

toggleTitle.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleForm.classList.toggle('show');
    focus.focus();
});

window.addEventListener('keydown', function (event) { 
    if (event.code === 'Escape') { 
        if (toggleForm.classList.contains('show')) {
            event.preventDefault();
            toggleForm.classList.remove('show');
        };
    };
});

