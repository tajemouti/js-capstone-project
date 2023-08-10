const postComment = async (id, user_name, com) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PLvSR6PHFG9fyXQEPJyE/comments?item_id=${id}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id.toString(),
      username: user_name,
      comment: com,
    }),
  });
  return resp.json();
};

export default postComment;
