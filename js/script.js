import { Calculate } from './calculate.js'

const activities = document.querySelector('.radios-group');
const genderMale = document.querySelector('#gender-male');
const genderFemale = document.querySelector('#gender-female');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const result = document.querySelector('.counter__result');
const form = document.querySelector('.counter__form');

form.addEventListener('input', () => { 
    checkState();
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    Calculate();
    result.classList.remove('counter__result--hidden');
});

resetButton.addEventListener('click', () => {
    genderMale.checked = true;
    genderFemale.checked = false;
    age.value = '';
    height.value = '';
    weight.value = '';
    activities.querySelector('#activity-minimal').checked = true;
    activities.querySelector('#activity-low').checked = false;
    activities.querySelector('#activity-medium').checked = false;
    activities.querySelector('#activity-high').checked = false;
    activities.querySelector('#activity-maximal').checked = false;
    result.classList.add('counter__result--hidden');
    submitButton.disabled = true;
    resetButton.disabled = true;
});

function checkState() {
    if (age.value !== "" && height.value !== "" && weight.value !== "")
        submitButton.disabled = false;
    else 
        submitButton.disabled = true;

    if (age.value !== "" || height.value !== "" || weight.value !== "") 
        resetButton.disabled = false;
    else 
        resetButton.disabled = true;
}