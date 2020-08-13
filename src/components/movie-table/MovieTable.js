import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CircularProgress, Table, TableBody } from '@material-ui/core';
import Movie from '../movie/Movie';

const GeneralHeader = styled.h3`
font-size: 20px;
text-align: center;
font-family: Roboto, sans-serif;
color: rgba(0, 0, 0, 0.6);
`;

const ResultHeader = styled.h4`
font-size: 14px;
text-align: center;
font-family: Roboto, sans-serif;
color: rgba(0, 0, 0, 0.5);
`;

const ErrorMessage = styled.p`
text-align: center;
font-family: Roboto, sans-serif;
font-size: 20px;
color: #dc004e;
`;

const MovieTableWrapper = styled.div`
width: 90%;
margin: 0 auto;
`;

const SpinnerWrapper = styled.div`
width: 250px;
margin: 50px auto;
`;

const MovieTable = () => {
	const { loading, error } = useSelector((state) => state && state.movies);
	let { movies } = useSelector((state) => state && state.movies);
	movies = movies && movies[0];
	const Search = movies?.Search;
	const totalResults = movies?.totalResults;
	return (
		<>
			<GeneralHeader>{movies && !loading ? 'Результаты поиска' : 'Здесь будут результаты поиска'}</GeneralHeader>
			{movies && !loading && (
				<ResultHeader>
					{`По вашему запросу было найдено ${totalResults || 0} фильмов`}
				</ResultHeader>
			)}
			<MovieTableWrapper>
				{loading ? <SpinnerWrapper><CircularProgress thickness="2" size="15rem" /></SpinnerWrapper>
					: (
						<Table>
							{Search?.length && totalResults
							&& <TableBody>{Search.map((movie) => <Movie {...movie} />)}</TableBody>}
							{error && (
								<>
									<ErrorMessage>Кажется что-то пошло не так</ErrorMessage>
									<ErrorMessage>{`Причина ошибки: ${error}`}</ErrorMessage>
								</>
							)}
						</Table>
					)}
			</MovieTableWrapper>
		</>
	);
};

export default MovieTable;
