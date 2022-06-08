/**
    * ! Redux Essentials - RTK Query Basics
    * ? https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics
    * ? https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced
*/

// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


/* -------------------- Environment Variables -------------------- */
const baseUrl = process.env.REACT_APP_VACCOVID_BASE_URL;
const rapidApiHost = process.env.REACT_APP_VACCOVID_X_RAPIDAPI_HOST;
const rapidApiKey = process.env.REACT_APP_VACCOVID_X_RAPIDAPI_KEY;
/* --------------------------------------------------------------- */

// Headers necessary for the query to the API
const covidApiHeaders = {
    'X-RapidAPI-Host': rapidApiHost,
	'X-RapidAPI-Key': rapidApiKey 
}

/* Creation of the createRequest constant to be able to indicate the url of the 
    endpoint and the headers (in this case they are necessary to query the Api). */
const createRequest = (url) => ({ url, headers: covidApiHeaders });

// Define our single API slice object
export const covidApi = createApi({
    // The cache reducer expects to be added at `state.covidApi`
    reducerPath: 'covidApi',
    // This request will have URLs starting with '/'
    baseQuery: fetchBaseQuery({ baseUrl }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getCountriesStatisticalData` endpoint is a "query" operation that returns data
        getCountriesStatisticalData: builder.query({
            // The URL for the request is '/'
            query: () => createRequest()
        }),
        getAllAsianCountriesData: builder.query({
            query: () => createRequest('asia')
        })
    })
});

// Export the auto-generated hook for the `getCountriesStatisticalData` query endpoint
export const { 
    useGetCountriesStatisticalDataQuery,
    useGetAllAsianCountriesDataQuery
} = covidApi;