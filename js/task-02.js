const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach(el => {
    const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList.add('item');
  list.append(liEl);
});
console.log(ingredients);