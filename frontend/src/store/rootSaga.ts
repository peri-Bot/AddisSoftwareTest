import { all } from 'redux-saga/effects';

// Combine all your sagas here
function* rootSaga() {
	yield all([
		// Add your sagas here
	]);
}

export default rootSaga;
