const ulEl = document.querySelector('#categories');
const numberOfCategories = ulEl.querySelectorAll('.item');
const allHeadersEl = ulEl.querySelectorAll('h2');
const allListItemsEl = ulEl.querySelectorAll('li.item ul');

let res = `Numbers of categories: ${numberOfCategories.length}`;

allListItemsEl.forEach(
  item =>
    (res += `
Category: ${item.previousElementSibling.textContent}
Elements: ${item.children.length}`)
);
console.log(res);
