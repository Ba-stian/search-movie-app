import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../utils';
import { movieChosen } from '../../redux/actions';

const Wrapper = styled.div`
width: 600px;
margin: 60px auto;
`;

const SearchComponent = () => {
	const [open, setOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();

	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const selectMovie = (...args) => {
		const [, value] = args;
		if (value && value.imdbID) {
			dispatch(movieChosen(value.imdbID));
			history.push(`/movies/:${value.imdbID}`);
		}
	};

	useEffect(() => {
		setLoading(true);
		if (inputValue.length > 2) {
			fetchMovies(inputValue)
				.then((res) => res.status === 200 && res.data)
				.then((res) => {
					if (res.Search) {
						setOptions(res.Search);
					} else {
						setOptions([]);
					}
					setLoading(false);
				});
		}
	}, [inputValue]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
			setLoading(false);
		}
	}, [open]);

	return (
		<Wrapper>
			<Autocomplete
				onChange={((event, value) => selectMovie(event, value))}
				open={open}
				onOpen={() => {
					setOpen(true);
				}}
				onClose={() => {
					setOpen(false);
				}}
				getOptionSelected={(option, value) => option.Title === value.name}
				getOptionLabel={(option) => option.Title}
				options={options}
				loading={loading}
				renderInput={(params) => (
					<TextField
						{...params}
						value={inputValue}
						onChange={onChange}
						label="Поиск фильмов"
						variant="outlined"
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<>
									{loading ? <CircularProgress color="inherit" size={20} /> : null}
									{params.InputProps.endAdornment}
								</>
							),
						}}
					/>
				)}
			/>
		</Wrapper>
	);
};

export default SearchComponent;
