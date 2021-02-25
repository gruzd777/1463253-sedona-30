"use strict";

let toggleForm = document.querySelector('.search__form');
let toggleTitle = document.querySelector('.search__link');

toogleTitle.onclick = function() {
    toggleForm.classList.add('show');
};