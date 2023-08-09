import "./style.css";
import "./logo.jpg";
import { fetchCategoryMeals, displayMeals } from "./modules/render.js";

const headerLinks = document.querySelectorAll("header a");
const renderCategory = async (category) => {
  const categoryMeals = await fetchCategoryMeals(category);
  displayMeals(categoryMeals);
};

headerLinks.forEach((link) => {
  link.addEventListener("click", async (e) => {
    e.preventDefault();
    const category = e.target.textContent;
    await renderCategory(category);
  });
});

renderCategory("Seafood");
