const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement("li");

  ingredientLi.classList.add("item");

  ingredientLi.textContent = ingredient;

  return ingredientLi;
});

ul.append(...elements);



