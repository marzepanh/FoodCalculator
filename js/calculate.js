
const ACTIVITY_MULTIPLIER = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
};

const GAIN_WEIGHT = 0.15;
const LOSE_WEIGHT = -0.15;
const form = document.querySelector('.counter__form');

const Calculate = function () {
    //calculate norm
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const age = form.querySelector('input[name="age"]').value;
    const height = form.querySelector('input[name="height"]').value;
    const weight = form.querySelector('input[name="weight"]').value;
    const activity = form.querySelector('input[name="activity"]:checked').value;
    
    const temp = (gender === 'male') ? 5 : -161;
    const n = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + temp;
    const caloriesNorm = ACTIVITY_MULTIPLIER[activity] * n;

    document.querySelector('#calories-norm').textContent = Math.round(caloriesNorm);
    document.querySelector('#calories-minimal').textContent = Math.round(caloriesNorm * (1 + LOSE_WEIGHT));
    document.querySelector('#calories-maximal').textContent = Math.round(caloriesNorm * (1 + GAIN_WEIGHT));
};

export {Calculate};