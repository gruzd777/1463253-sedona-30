let toggleForm = document.querySelector('.search__form');
let toggleTitle = document.querySelector('.search__link');
let focus = toggleForm.querySelector('#date-first');

toggleTitle.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleForm.classList.toggle('show');
    focus.focus();
});

window.addEventListener('keydown', function (event) { 
    if (event.code === 'Escape' || event.code === 'Backspace') { 
        alert('хуй');
    };
}
)

