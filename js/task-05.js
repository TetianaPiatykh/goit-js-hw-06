const input = document.querySelector('input#name-input');
let span = document.querySelector('span#name-output');

input.addEventListener('input', () => {
    if (input.value === '') {
        span.textContent = 'Anonymous'
    } else {
        span.textContent = input.value;
    }
});