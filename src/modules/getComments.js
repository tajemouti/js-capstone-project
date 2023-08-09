const getComments = async (endpoint) => {
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${endpoint}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}

export default getComments;