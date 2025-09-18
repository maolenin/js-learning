const breakfastMenu = ['Pancakes - $12.99', 'Eggs Benedict - $22.99', 'Oatmeal - $ 21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $25', 'Pasta - $18.15', 'Burger - $8', 'Salmon - $51.99'];
const dessertMenu = ['Cake - $4.99', 'Ice Cream - $2', 'Pudding - $5', 'Fruit Salad - $12.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';

for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
