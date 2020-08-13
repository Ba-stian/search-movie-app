import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

const Movie = ({
	Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country,
	Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice,
	Production,
}) => (
	<TableRow>
		<TableCell>{Title}</TableCell>
		<TableCell>{Year}</TableCell>
		<TableCell>{Rated}</TableCell>
		<TableCell>{Released}</TableCell>
		<TableCell>{Runtime}</TableCell>
		<TableCell>{Genre}</TableCell>
		<TableCell>{Director}</TableCell>
		<TableCell>{Writer}</TableCell>
		<TableCell>{Actors}</TableCell>
		<TableCell>{Plot}</TableCell>
		<TableCell>{Language}</TableCell>
		<TableCell>{Country}</TableCell>
		<TableCell>{Awards}</TableCell>
		{/*<TableCell><img src={Poster} alt="poster" /></TableCell>*/}
		{/*<TableCell>{Ratings}</TableCell>*/}
		<TableCell>{Metascore}</TableCell>
		<TableCell>{imdbRating}</TableCell>
		<TableCell>{imdbVotes}</TableCell>
		<TableCell>{imdbID}</TableCell>
		<TableCell>{Type}</TableCell>
		<TableCell>{DVD}</TableCell>
		<TableCell>{BoxOffice}</TableCell>
		<TableCell>{Production}</TableCell>
	</TableRow>
);

Movie.propTypes = {
	Title: PropTypes.string.isRequired,
	Year: PropTypes.string.isRequired,
	Rated: PropTypes.string.isRequired,
	Released: PropTypes.string.isRequired,
	Runtime: PropTypes.string.isRequired,
	Genre: PropTypes.string.isRequired,
	Director: PropTypes.string.isRequired,
	Writer: PropTypes.string.isRequired,
	Actors: PropTypes.string.isRequired,
	Plot: PropTypes.string.isRequired,
	Language: PropTypes.string.isRequired,
	Country: PropTypes.string.isRequired,
	Awards: PropTypes.string.isRequired,
	Poster: PropTypes.string.isRequired,
	Ratings: PropTypes.string.isRequired,
	Metascore: PropTypes.arrayOf(PropTypes.object).isRequired,
	imdbRating: PropTypes.string.isRequired,
	imdbVotes: PropTypes.string.isRequired,
	imdbID: PropTypes.string.isRequired,
	Type: PropTypes.string.isRequired,
	DVD: PropTypes.string.isRequired,
	BoxOffice: PropTypes.string.isRequired,
	Production: PropTypes.string.isRequired,
};

export default Movie;
