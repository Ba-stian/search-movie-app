import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import MovieDetails from '../components/movie-details/MovieDetails';
import SearchComponent from '../components/search/SearchComponent';

const Details = () => {
	const history = useHistory();
	return (
		<>
			<Button onClick={() => history.push('/')}>На главную</Button>
			<SearchComponent />
			<MovieDetails />
		</>
	);
};

export default Details;
