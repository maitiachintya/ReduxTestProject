// import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import authReducer from '../redux/reducer/AuthReducer'
// import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import {logger} from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './redux_saga/rootSaga'

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['auth'],
//   blacklist: [''],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       thunk: false, // Disable thunk middleware
//       serializableCheck: false, // Disable serializable check for redux-persist
//     }).concat(logger, sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);

// const persistor = persistStore(store);

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export {store, persistor};


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import authReducer from '../redux/reducer/AuthReducer';
import rootSaga from './redux_saga/rootSaga';

// 1. Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

// 2. Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

// 3. Wrap root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// 5. Configure store with middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware, logger),
});

// 6. Run sagas
sagaMiddleware.run(rootSaga);

// 7. Create persistor
const persistor = persistStore(store);

// 8. Setup types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor };
