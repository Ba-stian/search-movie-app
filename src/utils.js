const axios = require('axios');

const fetchMovie = async (searchValue) => {
	await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=${process.env.API_KEY}&`)
		.then((res) => {
			if (res.status === 200 && res.data.length) {
				return res.data;
			}
			return res;
		});
};

export {
	fetchMovie as default,
};
