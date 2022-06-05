import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = process.env.REACT_APP_VACCOVID_BASE_URL;
const rapidApiHost = process.env.REACT_APP_VACCOVID_X_RAPIDAPI_HOST;
const rapidApiKey = process.env.REACT_APP_VACCOVID_X_RAPIDAPI_KEY;

const covidApiHeaders = {
    'X-RapidAPI-Host': rapidApiHost,
	'X-RapidAPI-Key': rapidApiKey 
}

const createRequest = ( url ) => ({ url, headers: covidApiHeaders });

export const covidApi = createApi({
    reducerPath: 'covidApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoint: ( builder ) => ({
        getCovidInfo: builder.query({
            query: () => createRequest('/')
        })
    })
})