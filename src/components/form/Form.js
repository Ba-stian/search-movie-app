import React, { useState } from 'react';
import { FormControl, Input, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../redux/actions';

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
		<FormControl>
			<form onSubmit={onSubmit}>
				<Input type="text" value={value} onChange={onChange} placeholder="Введите название" />
				<Button type="submit" disabled={value.length < 2}>Поиск</Button>
			</form>
		</FormControl>
	);
};

export default Form;
