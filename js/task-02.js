const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const newList = [];
ingredients.forEach(el => {
    const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList.add('item');
  newList.push(liEl);
});
 list.append(...newList);
