import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice"; // Ensure this path is correct

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});
