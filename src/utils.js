const axios = require('axios');

const fetchMovie = async (searchValue) => {
	return await axios.get(`htp://www.omdbapi.com/?t=${searchValue}&apikey=${process.env.API_KEY}&`);
};

export {
	fetchMovie as default,
};
