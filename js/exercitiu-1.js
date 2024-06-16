const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll("li.item");
const numberOfCategories = categories.length;

console.log("Number of categories:", numberOfCategories);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});

// Selectăm elementul ul#categories din DOM
const categoriesList = document.getElementById('categories');

// Obținem toate elementele li.item din lista de categorii
const categoryItems = categoriesList.querySelectorAll('li.item');

// Afișăm numărul total de categorii
console.log(`Number of categories: ${categoryItems.length}`);

// Iterăm prin fiecare element li.item pentru a obține titlul și numărul de elemente din fiecare categorie
categoryItems.forEach(item => {
  // Obținem titlul categoriei (tag-ul h2)
  const categoryTitle = item.querySelector('h2').textContent;

  // Obținem lista de elemente din categoria curentă (toate li sub ul)
  const elementsList = item.querySelectorAll('ul li');

  // Afișăm titlul categoriei și numărul de elemente
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsList.length}`);
});