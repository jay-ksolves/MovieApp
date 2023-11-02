import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/moviesSlice'
export const store = configureStore({

    reducer: {
        movies: moviesReducer
    },

});

