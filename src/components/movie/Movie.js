import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { movieChosen } from '../../redux/actions';

const StyledRow = styled(TableRow)`
:hover {
background: #7dcffd;
cursor: pointer;
}
`;

const StyledImage = styled.img`
width: 100px;
height: 100px;
object-fit: contain;
`;

const Movie = ({
	Title, Year, imdbID, Type, Poster,
}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const onClick = (e) => {
		const { id } = e.currentTarget.dataset;
		dispatch(movieChosen(id));
		history.push(`/movies/:${id}`);
	};
	return (
		<StyledRow data-id={imdbID} onClick={onClick}>
			<TableCell>{Title.includes('N/A') ? 'Нет информации' : Title}</TableCell>
			<TableCell>{Year.includes('N/A') ? 'Нет информации' : Year}</TableCell>
			<TableCell>{imdbID.includes('N/A') ? 'Нет информации' : imdbID}</TableCell>
			<TableCell>{Type.includes('N/A') ? 'Нет информации' : Type}</TableCell>
			<TableCell>{Poster.includes('N/A') ? 'Нет информации' : <StyledImage src={Poster} alt="poster" />}</TableCell>
		</StyledRow>
	);
};

Movie.propTypes = {
	Title: PropTypes.string.isRequired,
	Year: PropTypes.string.isRequired,
	Poster: PropTypes.string.isRequired,
	imdbID: PropTypes.string.isRequired,
	Type: PropTypes.string.isRequired,
};

export default Movie;
