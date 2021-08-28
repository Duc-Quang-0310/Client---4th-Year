import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterSlice from './Counter/counterSlice'
import createSagaMiddleware from '@redux-saga/core'
import AuthSlice from './Auth/AuthSlice'
import rootsaga from './rootsaga'

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, combineReducers({
        counter: counterSlice,
        auth: AuthSlice
    })),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootsaga)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
