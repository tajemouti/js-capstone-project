import getDetail from './getDetail.js';

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');
const itemSection = document.getElementById('itemSection');

const closeModal = () => {
  modal.style.display = 'none';
};

const displayItemDetail = (data) => {
  modal.style.display = 'flex';

  itemSection.innerHTML = `
    <img class='img' src='${data.strMealThumb}'>
    <h2>${data.strMeal}</h2>
    <p class='p'>${data.strInstructions}</p>
    <div class='addComment'>
        <h3 class='commentTitle'>Add Comment</h3>
        <input class='usernameInput' placeholder='Name'/>
        <textarea id='txtid' name='txtname' rows='4' cols='50' maxlength='200' class='textarea'>Add comment here...</textarea>
        <button id='btnCommentSubmit' class='commentsBtn'>Add Comment</button>
    </div>
    `;

  closebtn.addEventListener('click', closeModal);
};

const popupModal = async (id) => {
  const data = await getDetail(`lookup.php?i=${id}`);
  const result = data.meals;
  displayItemDetail(result[0]);
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

export default popupModal;
