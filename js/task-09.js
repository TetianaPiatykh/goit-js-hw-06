const ColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
};

const changeColorBtn = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = body.style.backgroundColor;
};


ColorBtn.addEventListener('click', changeColorBtn);


// colorSpan = `${ getRandomHexColor }`;

// console.log(body.style.backgroundColor);

