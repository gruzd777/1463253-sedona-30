const toggleForm = document.querySelector('.search__form');
const toggleTitle = document.querySelector('.search__link');
const focus = document.querySelector('#date-first');
const formInput = document.querySelector('.search__input');
const formButton = document.querySelector('.search__button');
const resultsLinks = document.querySelectorAll('.results__link');
const directionLinks = document.querySelectorAll('.direction-link');

if (toggleForm) {
    toggleForm.classList.add('hide');    
}

if (toggleTitle) {
    toggleTitle.addEventListener('click', function (evt) {
        evt.preventDefault();
        toggleForm.classList.toggle('hide');
        focus.focus();
        if (toggleForm.classList.contains('error')) {
            toggleForm.classList.remove('error');
        };
    });
}


window.addEventListener('keydown', function (event) { 
    if (event.code === 'Escape') { 
        toggleForm.classList.remove('error');

        if (!toggleForm.classList.contains('hide')) {
            event.preventDefault();
            toggleForm.classList.add('hide');
        };
    };
});

if (toggleForm) {
    toggleForm.addEventListener('submit', function (evt) {
        if (!formInput.value) {
            evt.preventDefault();
            toggleForm.classList.remove('error');
            toggleForm.offsetWidth = toggleForm.offsetWidth;
            toggleForm.classList.add('error');
        };
    });
}

if (resultsLinks) {
    resultsLinks.forEach(function(elem, i){
        elem.addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('.results__link--active').classList.remove('results__link--active');
            this.classList.add('results__link--active');
        });
    });
}

if (directionLinks) {
    directionLinks.forEach(function(directionLink, i){
        directionLink.addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('.down__active').classList.remove('down__active');
            this.classList.add('down__active');
        });
    });
}
