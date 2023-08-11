import './style.css';
import './logo.jpg';
import {
  fetchCategoryMeals, displayMeals, sendLike, updateLikesCount,
} from './modules/render.js';
import { updateCategoryCounts } from './modules/mealCounter.js';

const headerLinks = document.querySelectorAll('header a');
const mealListCont = document.getElementById('mealList');

const renderCategory = async (category) => {
  const categoryMeals = await fetchCategoryMeals(category);
  displayMeals(categoryMeals);
};

const setupHeaderLinkListeners = () => {
  headerLinks.forEach((link) => {
    const { dataset: { category } } = link;
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      await renderCategory(category);
    });
  });
};

const initializeApp = async () => {
  await updateCategoryCounts();
  setupHeaderLinkListeners();
  renderCategory('Seafood');
};

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

initializeApp();
