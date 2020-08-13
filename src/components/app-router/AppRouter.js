import React from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { Main, Details } from '../../pages';

const Wrapper = styled.div`
background: #36aced;
height: 100%;
min-height: 150vh;
`;

const AppRouter = () => {
	const chosenMovie = useSelector((state) => state && state.movies && state.movies.chosenMovie);
	return (
		<Router>
			<Wrapper>
				<Container>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route
							exact
							path={`/movies/:${chosenMovie}`}
							component={Details}
						/>
						<Redirect from="*" to="/" />
					</Switch>
				</Container>
			</Wrapper>
		</Router>
	);
};

export default AppRouter;
