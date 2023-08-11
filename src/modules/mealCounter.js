const API_KEY = '1';
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1';

const fetchCategoryMealCount = async (category) => {
  const response = await fetch(`${API_BASE_URL}/${API_KEY}/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals ? data.meals.length : 0;
};

const updateCategoryCounts = async () => {
  const headerLinks = document.querySelectorAll('header a');

  headerLinks.forEach(async (link) => {
    const { dataset: { category } } = link;
    const mealCount = await fetchCategoryMealCount(category);
    const countElement = link.nextElementSibling;
    countElement.textContent = ` (${mealCount})`;
  });
};

export default updateCategoryCounts;
