const axios = require('axios');

async function fetchMovies(searchValue) {
	return await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.API_KEY}&`);
}

async function fetchMovieDetails(id) {
	return await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}&`);
}

export {
	fetchMovies,
	fetchMovieDetails,
};
