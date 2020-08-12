import React from 'react';
import './app.css';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import Form from '../form/Form';

const Wrapper = styled.div`
background: coral;
height: 100vh;
`;

const App = () => (
	<>
		<Wrapper>
			<Container>
				<Form />
			</Container>
		</Wrapper>
	</>
);

export default App;
