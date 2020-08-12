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

export {
	searchMovies,
	requestMovies,
	moviesRequested,
};
