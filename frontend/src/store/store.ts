import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga.ts';

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
	reducer: {}, // Add your slices here as they are created
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: false, // Disable thunk since we're using Redux-Saga
			serializableCheck: false,
		}).concat(sagaMiddleware),
});

// Run Saga middleware
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
