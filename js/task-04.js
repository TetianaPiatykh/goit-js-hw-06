
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
    // counterValue: document.querySelector('#value').textContent = 0,
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
});

incrementBtn.addEventListener('click',  () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
});


// const onBtnDecrementClick = {};
// const onBtnIncrementClick = {};