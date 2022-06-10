const fontSizeInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


function fontSizeChanged() {
    let font = fontSizeInput.value;
    spanText.style.fontSize = `${font}px`;
};

fontSizeInput.addEventListener('input', fontSizeChanged);