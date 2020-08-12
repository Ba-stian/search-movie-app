import { takeEvery, put, call } from 'redux-saga/effects';
import { requestMovies, moviesRequested } from './actions';
import fetchMovie from '../utils';

function* sagaWorker() {
	yield put(requestMovies());
	const data = yield call(fetchMovie);
	yield put(moviesRequested(data));
}

function* sagas() {
	yield takeEvery('SEARCH_MOVIE', sagaWorker);
}

export default sagas;
