const searchMovies = (searchValue) => ({
	type: 'SEARCH_MOVIE',
	payload: searchValue,
});

const requestMovies = () => ({
	type: 'REQUEST_MOVIES',
});

const moviesRequested = (movies) => ({
	type: 'MOVIES_REQUESTED',
	payload: movies,
});

const movieChosen = (id) => ({
	type: 'MOVIE_CHOSEN',
	payload: id,
});

const requestMovieDetails = () => ({
	type: 'REQUEST_MOVIE_DETAILS',
});

const movieDetailsRequested = (movieDetails) => ({
	type: 'MOVIE_DETAILS_REQUESTED',
	payload: movieDetails,
});

export {
	searchMovies,
	requestMovies,
	moviesRequested,
	movieChosen,
	requestMovieDetails,
	movieDetailsRequested,
};
