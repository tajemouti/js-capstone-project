import popupModal from './popupModal.js';

const API_KEY = '1';
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1';
const APP_ID = 'U0rygR4lGVMwDPhnPl1g';
const INVOLVEMENT_API_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const mealListCont = document.getElementById('mealList');

const fetchCategoryMeals = async (category) => {
  const response = await fetch(
    `${API_BASE_URL}/${API_KEY}/filter.php?c=${category}`,
  );
  const data = await response.json();
  return data.meals || [];
};

const displayMeals = (meals) => {
  mealListCont.innerHTML = '';
  meals.forEach((meal) => {
    const mealElement = document.createElement('div');
    mealElement.classList.add('meal');

    const mealImage = document.createElement('img');
    mealImage.src = `${meal.strMealThumb}/preview`;
    mealImage.alt = meal.strMeal;

    const mealTitle = document.createElement('h3');
    mealTitle.textContent = meal.strMeal;

    const commentsButton = document.createElement('button');
    commentsButton.textContent = 'Comments';
    commentsButton.classList.add('commentsBtn');

    commentsButton.addEventListener('click', () => popupModal(meal.idMeal));

    mealElement.appendChild(mealImage);
    mealElement.appendChild(mealTitle);
    mealElement.appendChild(commentsButton);

    mealListCont.appendChild(mealElement);
  });
};

export { fetchCategoryMeals, displayMeals };
