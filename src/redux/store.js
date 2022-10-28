import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filterSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedFilterReducer = persistReducer(
    persistConfig,
    filtersReducer,
)

const persistedContactsReducer = persistReducer(
    persistConfig,
    contactsReducer,
)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: persistedFilterReducer,
    }
});

export const persistor = persistStore(store);