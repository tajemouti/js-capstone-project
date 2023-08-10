import './style.css';
import './logo.jpg';
import {
  fetchCategoryMeals, displayMeals, sendLike, updateLikesCount,
} from './modules/render.js';

const headerLinks = document.querySelectorAll('header a');
const mealListCont = document.getElementById('mealList');

const renderCategory = async (category) => {
  const categoryMeals = await fetchCategoryMeals(category);
  displayMeals(categoryMeals);
};

headerLinks.forEach((link) => {
  link.addEventListener('click', async (e) => {
    e.preventDefault();
    const category = e.target.textContent;
    await renderCategory(category);
  });
});

mealListCont.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes-icon')) {
    const mealTitleElement = e.target.closest('.meal').querySelector('h3');
    const mealTitle = mealTitleElement.textContent;
    const likesCountElement = e.target.nextElementSibling;

    const currentLikes = parseInt(likesCountElement.textContent, 10);
    const updatedLikes = currentLikes + 1;

    const success = await sendLike(mealTitle);

    if (success) {
      updateLikesCount(likesCountElement, updatedLikes);
    }
  }
});

renderCategory('Seafood');
