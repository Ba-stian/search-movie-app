const axios = require('axios');

const fetchMovies = async (searchValue) => {
	return await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.API_KEY}&`);
};

const fetchMovieDetails = async (id) => {
	return await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}&`);
};

export {
	fetchMovies,
	fetchMovieDetails,
};
