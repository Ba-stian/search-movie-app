import React from 'react';
import './app.css';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import Form from '../form/Form';
import ErrorBoundary from '../error-boundary/ErrorBoundry';

const Wrapper = styled.div`
background: #36aced;
height: 100vh;
`;

const App = () => (
	<>
		<ErrorBoundary>
			<Wrapper>
				<Container>
					<Form />
				</Container>
			</Wrapper>
		</ErrorBoundary>
	</>
);

export default App;
