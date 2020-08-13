import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { searchMovies } from '../../redux/actions';

const StyledForm = styled.form`
margin: 0 auto;
padding: 5rem;
width: 400px;
`;

const StyledHeader = styled.h1`
font-size: 24px;
text-align: center;
font-family: 'Roboto';
color: rgba(0, 0, 0, 0.6);
`;

const ButtonWrapper = styled.div`
text-align: center;
margin: 10px auto;
width: 150px;
`;

const Form = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(searchMovies(value));
		setValue('');
	};
	return (
		<FormControl fullWidth>
			<StyledForm onSubmit={onSubmit}>
				<StyledHeader>Поиск по базе фильмов</StyledHeader>
				<TextField id="outlined-basic" label="Поиск" variant="outlined" value={value} onChange={onChange} placeholder="Введите название" fullWidth={300} autoComplete="off" />
				<ButtonWrapper>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						disabled={value.length < 2}
					>
						Искать
					</Button>
				</ButtonWrapper>
			</StyledForm>
		</FormControl>
	);
};

export default Form;
