const API_KEY = '1';
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1';

const fetchSeafoodMeals = async () => {
  const response = await fetch(`${API_BASE_URL}/${API_KEY}/filter.php?c=Seafood`);
  const data = await response.json();
  return data.meals || [];
};
