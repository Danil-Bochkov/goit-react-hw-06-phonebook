import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filterSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
})

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer,
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
    }
});

export const persistor = persistStore(store);