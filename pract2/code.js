const element = document.querySelector('.lesson__item-list_red');
const elementStyle = getComputedStyle(element)
console.log(elementStyle.paddingLeft);
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);
