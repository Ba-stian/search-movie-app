import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CircularProgress, Table, TableBody } from '@material-ui/core';
import Movie from '../movie/Movie';

const GeneralHeader = styled.h3`
font-size: 20px;
text-align: center;
font-family: 'Roboto';
color: rgba(0, 0, 0, 0.6);
`;

const ResultHeader = styled.h4`
font-size: 14px;
text-align: center;
font-family: 'Roboto';
color: rgba(0, 0, 0, 0.5);
`;

const ErrorMessage = styled.p`
text-align: center;
font-family: 'Roboto';
font-size: 20px;
color: #dc004e;
`;

const MovieTableWrapper = styled.div`
width: 60%
margin: 0 auto;
`;

const SpinnerWrapper = styled.div`
width: 250px;
margin: 50px auto;
`;

const MovieTable = () => {
	const { movies, loading, error } = useSelector((state) => state && state.movies);
	const notFound = movies && movies.find((movie) => movie.Error === 'Movie not found!');
	return (
		<MovieTableWrapper>
			<GeneralHeader>Результаты поиска:</GeneralHeader>
			{movies && !loading && (
				<ResultHeader>
					{`По вашему запросу было найдено ${movies.length && !notFound ? movies.length : 0} фильмов`}
				</ResultHeader>
			)}
			{loading ? <SpinnerWrapper><CircularProgress thickness="2" size="15rem" /></SpinnerWrapper>
				: (
					<MovieTableWrapper>
						<Table>
							{movies && movies.length && !notFound
							&& <TableBody>{movies.map((movie) => <Movie {...movie} />)}</TableBody>}
							{error && (
								<>
									<ErrorMessage>Кажется что-то пошло не так</ErrorMessage>
									<ErrorMessage>{`Причина ошибки: ${error}`}</ErrorMessage>
								</>
							)}
						</Table>
					</MovieTableWrapper>
				)}
		</MovieTableWrapper>
	);
};

export default MovieTable;
