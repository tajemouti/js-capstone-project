const postComment = async (endpoint) => {
  const url =
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${endpoint}`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item_id: "52959",
      username: "Bilal",
      comment: "Nice one dear",
    }),
  });
  const id = await resp.json();
  console.log("PLvSR6PHFG9fyXQEPJyE");
};

export default postComment;

// const url =
// "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
// const resp = await fetch(url, {
// method: "POST",
// headers: {
//   "Content-Type": "application/json",
// },
// body: JSON.stringify({}),
// });
// const id = await resp.json();
// console.log("PLvSR6PHFG9fyXQEPJyE");
