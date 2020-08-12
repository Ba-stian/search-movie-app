const initialState = {
	searchValue: '',
	loading: false,
	movies: [],
};
const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'SEARCH_MOVIE':
		return {
			...state,
			searchValue: action.payload,
		};
	case 'REQUEST_MOVIES':
		return {
			...state,
			loading: true,
		};
	case 'MOVIES_REQUESTED':
		return {
			...state,
			loading: false,
			movies: action.payload,
		};
	default:
		return state;
	}
};

export default moviesReducer;
