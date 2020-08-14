import React from 'react';
import {
	Card, CardActionArea, CardMedia, CardContent, CircularProgress, Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
width: 250px;
margin: 50px auto;
`;

const StyledCard = styled(Card)`
max-width: 600px;
margin: 50px auto;
`;

const StyledMedia = styled(CardMedia)`
width: 300px;
height: 400px;
margin: 10px auto;
border-radius: 5px;
background-size: contain !important;
`;

const StyledTypography = styled(Typography)`
word-break: break-word;
`;

const MovieDetails = () => {
	const { loading, movieDetails } = useSelector((state) => state && state.movies && state.movies);
	return (
		<div>
			{loading ? <SpinnerWrapper><CircularProgress thickness="2" size="15rem" /></SpinnerWrapper>
				: (
					<StyledCard variant="outlined">
						<CardActionArea>
							<StyledMedia image={movieDetails.Poster} />
							<CardContent>
								{Object.entries(movieDetails).map(([key, value]) => {
									let raiting = [];
									if (key === 'Ratings') {
										raiting = value.map(({ Source, Value }) => (
											<StyledTypography variant="body2" color="textSecondary" component="p">
												{`${Source}: ${Value}`}
											</StyledTypography>
										));
									}
									return (
										<>
											<StyledTypography variant="body2" color="textSecondary" component="p">
												{
													key !== 'Ratings' && key !== 'Poster' && key !== 'Response'
														? `${key}: ${value}`
														: null
												}
											</StyledTypography>
											{raiting}
										</>
									);
								})}
							</CardContent>
						</CardActionArea>
					</StyledCard>
				)}
		</div>
	);
};

export default MovieDetails;
