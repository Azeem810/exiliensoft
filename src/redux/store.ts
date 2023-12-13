import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import RootReducer from './slices/rootReducer';
import rootSaga from './sagas/rootSaga';

const SagaMiddleware:any = createSagaMiddleware();
let middleware:any = [SagaMiddleware];
export const store = configureStore({
  reducer: RootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
SagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
