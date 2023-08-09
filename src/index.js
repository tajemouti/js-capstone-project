import './style.css';
import './logo.jpg';
import { fetchSeafoodMeals, displayMeals } from './modules/render.js';

const renderAPI = async () => {
  const seafoodMeals = await fetchSeafoodMeals();
  displayMeals(seafoodMeals);
};

renderAPI();
