import React from 'react';
import './app.css';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../../pages';
import ErrorBoundary from '../error-boundary/ErrorBoundry';
import store from '../../redux/store';

const Wrapper = styled.div`
background: #36aced;
height: 100vh;
`;

const App = () => (
	<>
		<Provider store={store}>
			<ErrorBoundary>
				<Router>
					<Wrapper>
						<Container>
							<Switch>
								<Route exact path="/" component={Main} />
							</Switch>
						</Container>
					</Wrapper>
				</Router>
			</ErrorBoundary>
		</Provider>
	</>
);

export default App;
