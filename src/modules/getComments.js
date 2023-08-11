const getComments = async (endpoint) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${endpoint}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getComments;
