const postComment = async (id, username, comment) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PLvSR6PHFG9fyXQEPJyE/comments?item_id=${id}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id.toString(),
      username,
      comment,
    }),
  });
  return resp.json();
};

export default postComment;
