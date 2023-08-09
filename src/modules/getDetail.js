const getDetail = async (endpoint) => {
  const url = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const response = await fetch(url);
  return response.json();
};

export default getDetail;
