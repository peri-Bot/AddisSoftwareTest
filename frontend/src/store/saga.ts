import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setSongs, addSong, updateSong, deleteSong, setLoading, setError } from './songSlice.ts';

const API_URL = 'http://localhost:5000/api/songs';

// Worker saga: will be fired on fetchSongs actions
function* fetchSongs() {
	try {
		yield put(setLoading(true));
		const response = yield call(axios.get, API_URL);
		yield put(setSongs(response.data));
	} catch (error) {
		yield put(setError('Failed to fetch songs'));
	} finally {
		yield put(setLoading(false));
	}
}

// Worker saga: will be fired on createSong actions
function* createSong(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(axios.post, API_URL, action.payload);
		yield put(addSong(response.data));
	} catch (error) {
		yield put(setError('Failed to create song'));
	} finally {
		yield put(setLoading(false));
	}
}

// Worker saga: will be fired on updateSong actions
function* modifySong(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
		yield put(updateSong(response.data));
	} catch (error) {
		yield put(setError('Failed to update song'));
	} finally {
		yield put(setLoading(false));
	}
}

// Worker saga: will be fired on deleteSong actions
function* removeSong(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.delete, `${API_URL}/${action.payload}`);
		yield put(deleteSong(action.payload));
	} catch (error) {
		yield put(setError('Failed to delete song'));
	} finally {
		yield put(setLoading(false));
	}
}

// Watcher saga: spawns a new fetchSongs task on each FETCH_SONGS action
function* watchSongActions() {
	yield takeEvery('songs/fetchSongs', fetchSongs);
	yield takeEvery('songs/createSong', createSong);
	yield takeEvery('songs/modifySong', modifySong);
	yield takeEvery('songs/removeSong', removeSong);
}

export default watchSongActions;
