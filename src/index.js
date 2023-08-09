import './style.css';
import './logo.jpg';
import getDetail from './modules/getDetail';

const id = 52959;

const data = await getDetail(`lookup.php?i=${id}`);
const result = data.meals;
console.log(result[0]);
