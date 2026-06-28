// persist:
import {persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { api } from "./api";


const persistConfig = {
    key:"index",
    storage
};

const persistedReducer = persistReducer( persistConfig , counterReducer );

export const store =  configureStore({
    reducer: {
        counter: persistedReducer,
        [api.reducerPath]: api.reducer
    },

    middleware: (getDefault) => getDefault({ serializableCheck:false }).concat(api.middleware)
});

export const persistor = persistStore(store);