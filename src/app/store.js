import { configureStore } from "@reduxjs/toolkit";

import continentSlice from "../features/continent/continentSlice";
import { covidApi } from "../services/covidApi";



export default configureStore({
    // Add the generated reducer as a specific top-level slice
    reducer: {
        continent: continentSlice,
        [covidApi.reducerPath]: covidApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(covidApi.middleware),
});