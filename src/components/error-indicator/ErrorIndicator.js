import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
font-size: 26px;
color: #fff;
`;

const Wrapper = styled.div`
height: 100vh;
background: #000;
`;

const ErrorIndicator = () => (
	<Wrapper>
		<Header>Whoops. Looks like something goes wrong, but we are already working on that</Header>
	</Wrapper>
);

export default ErrorIndicator;
