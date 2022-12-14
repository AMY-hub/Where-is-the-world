import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '../features/theme/theme.slice';
import * as API from '../config';
import { ApiType } from './store.types';
import axios from 'axios';
import { countriesReducer } from '../features/countries/countries.slice';
import { filtersReducer } from '../features/filters/filters.slice';
import { countryDetailsReducer } from '../features/countryDetails/countryDetails.slice';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['theme']
}

const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    filters: filtersReducer,
    countryDetails: countryDetailsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: API as ApiType,
                client: axios
            }
        },
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;