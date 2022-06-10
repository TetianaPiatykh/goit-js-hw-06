const validationInput = document.querySelector('#validation-input');
const dataValue = document.querySelector('input[data-length]');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.log(event.currentTarget.value.length);
     if (event.currentTarget.value.length === Number(dataValue.dataset.length))
     {
         validationInput.classList.add('valid'),
             validationInput.classList.remove('invalid')
     } else {
         validationInput.classList.add('invalid'),
    validationInput.classList.remove('valid') }
};



// console.log(Number(dataValue.dataset.length));

// console.log(validationInput.currentTarget.length);