import React from 'react';
import './app.css';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Form from '../form/Form';
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
				<Wrapper>
					<Container>
						<Form />
					</Container>
				</Wrapper>
			</ErrorBoundary>
		</Provider>
	</>
);

export default App;
