import getDetail from './getDetail.js';
import getComments from './getComments.js';

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');
const itemSection = document.getElementById('itemSection');
const commentSection = document.getElementById('commentSection');
const commentsHeading = document.getElementById('commentsHeading');

const closeModal = () => {
  modal.style.display = 'none';
};

const displayItemDetail = (data, comments) => {
  modal.style.display = 'flex';

  itemSection.innerHTML = `
    <img class='img' src='${data.strMealThumb}'>
    <h2>${data.strMeal}</h2>
    <p class='p'>${data.strInstructions}</p>
    `;

  commentsHeading.innerHTML = `<p class='commentCountTitle'>Comments(${comments.length})</p>`;
  commentSection.innerHTML = comments
    .map(
      (comment) => `
  <div class="commentBox">
  <p class="commentName">${comment.username}:</p>
  <p class="commentText">${comment.comment}</p>
  <p class="date">${comment.creation_date}</p>
  </div>`,
    )
    .join('');

  closebtn.addEventListener('click', closeModal);
};

const popupModal = async (id) => {
  const data = await getDetail(`lookup.php?i=${id}`);
  const result = data.meals;
  const comments = await getComments(
    `PLvSR6PHFG9fyXQEPJyE/comments?item_id=${id}`,
  );
  displayItemDetail(result[0], comments);
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

export default popupModal;
