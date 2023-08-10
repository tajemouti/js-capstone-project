import getDetail from './getDetail.js';
import getComments from './getComments.js';
import postComment from './postComment.js';
import commentCounter from './commentCounter.js';

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');
const itemSection = document.getElementById('itemSection');
const commentSection = document.getElementById('commentSection');
const commentsHeading = document.getElementById('commentsHeading');
const btnAddComment = document.getElementById('btnAddComment');

const closeModal = () => {
  modal.style.display = 'none';
  itemSection.innerHTML = '';
  commentsHeading.innerHTML = '';
  commentSection.innerHTML = '';
};

const displayItemDetail = (id, data, comments) => {
  modal.style.display = 'flex';

  itemSection.innerHTML = `
    <img class='img' src='${data.strMealThumb}'>
    <h2>${data.strMeal}</h2>
    <p class='p'>${data.strInstructions}</p>
    `;

  if (comments.length > 0) {
    const count = commentCounter(comments);
    commentsHeading.innerHTML = `<p class='commentCountTitle'>Comments(${count})</p>`;
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
  }

  btnAddComment.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username !== '' && comment !== '') {
      postComment(id, username, comment);
      document.getElementById('username').value = '';
      document.getElementById('comment').value = '';
      closeModal();
    }
  });

  closebtn.addEventListener('click', closeModal);
};

const popupModal = async (id) => {
  const data = await getDetail(`lookup.php?i=${id}`);
  const result = data.meals;
  const comments = await getComments(
    `PLvSR6PHFG9fyXQEPJyE/comments?item_id=${id}`,
  );
  displayItemDetail(id, result[0], comments);
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    itemSection.innerHTML = '';
    commentsHeading.innerHTML = '';
    commentSection.innerHTML = '';
  }
};

export default popupModal;
