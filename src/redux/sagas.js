import {
	takeEvery, put, call, select,
} from 'redux-saga/effects';
import { requestMovies, moviesRequested } from './actions';
import fetchMovie from '../utils';

const getSearchValue = (state) => state.movies.searchValue;

function* sagaWorker() {
	yield put(requestMovies());
	const searchValue = yield select(getSearchValue);
	try {
		const res = yield call(fetchMovie, searchValue);
		if (res.status === 200) {
			yield put(moviesRequested(res.data));
		}
	} catch (e) {
		yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
	}
}

function* sagas() {
	yield takeEvery('SEARCH_MOVIE', sagaWorker);
}

export default sagas;
