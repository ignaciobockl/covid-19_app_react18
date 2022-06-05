const baseURL = process.env.REACT_APP_VACCOVID_BASE_URL;
const rapidApiHOST = process.env.REACT_APP_VACCOVID_X_RAPIDAPI_HOST;
const rapidApiKey = process.env.REACT_APP_VACCOVID_X_RAPIDAPI_KEY;


export function fetchWithoutToken ( endpoint, data, method = 'GET' ) {

    let url = '';

    if ( endpoint !== undefined || endpoint !== null ) { url = `${ baseURL }/${ endpoint }` } 
    else { url = `${ baseURL }` }
    
    return fetch( url, {
        // mode: 'no-cors',
        method,
        headers: {
            // 'Content-type': 'application/json',
            'X-RapidAPI-Host': rapidApiHOST,
		    'X-RapidAPI-Key': rapidApiKey 
        },
        body: JSON.stringify( data )
    })
    .catch( err => {
        alert( err.message );
        console.log( 'fetchWithoutToken error: ', err );
    });

}