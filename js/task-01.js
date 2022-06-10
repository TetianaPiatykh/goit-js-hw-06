const allCategories = document.querySelector('ul#categories').children.length;
console.log(`Number of categories: ${allCategories}`);

const categoryList = Array.from(document.querySelectorAll('li.item'));
categoryList.forEach(item => {
    const nameCategories = item.querySelector('h2').textContent;
    const categoryLength = item.querySelector('ul').children.length;
    console.log(`Category: ${nameCategories}`);
    console.log(`Elements: ${categoryLength}`);
})
// const nameCategories = document.querySelector('h2').textcontent;
// console.log(`Category: ${nameCategories}`);