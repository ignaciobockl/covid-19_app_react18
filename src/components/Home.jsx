import React from 'react';

import { useGetCountriesStatisticalDataQuery } from '../services/covidApi';



export default function Home () {
    
    /**
    * ! data: 
            the actual response contents from the server. This field will be undefined until the response is received.
    * ! isLoading: 
            a boolean indicating if this hook is currently making the first request to the server. (Note that if the parameters change to request different data, isLoading will remain false.)
    * ! isFetching: 
            a boolean indicating if the hook is currently making any request to the server
    * ! isSuccess: 
            a boolean indicating if the hook has made a successful request and has cached data available (ie, data should be defined now)
    * ! isError: 
            a boolean indicating if the last request had an error
    * ! error: 
            a serialized error object
    */

    const { data, isLoading, isFetching, isSuccess, isError, error } = useGetCountriesStatisticalDataQuery();
    console.log('data', data);
    console.log('isLoading', isLoading);
    console.log('isFetching', isFetching);
    console.log('isSuccess', isSuccess);
    console.log('isError', isError);
    console.log('error', error);
        
    return (
        <>
            <h1>Home</h1>

            <div>

                <ul>
                    <h2>Continents</h2>
                    <a>World</a>
                </ul>

                <div>
                    <table>
                        {/* caption es el encargado de darle una descripcion o titulo a la tabla */}
                        <caption>
                            <h1>Asia Data</h1>
                        </caption>
                        <thead>
                            <tr>
                                <th>NUM</th>
                                <th>COUNTRY</th>
                                <th>TOTAL CASES</th>
                                <th>NEW CASES</th>
                                <th>INFECTION RISK</th>
                                <th>SERIOUS, CRITICAL</th>
                                <th>ACTIVE CASES</th>
                                <th>TOTAL DEATHS</th>
                                <th>NEW DEATHS</th>
                                <th>CASE FATALITY RATE(CFR)</th>
                                <th>TOTAL TESTS</th>
                                <th>TEST PERCENTAGE</th>
                                <th>TOTAL RECOVERED</th>
                                <th>RECOVERY PERCENTAGE</th>
                                <th>POPULATION</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>India</td>
                            <td>43.118.734</td>
                            <td>3.685</td>
                            <td>3.07%</td>
                            <td>698</td>
                            <td>30.661</td>
                            <td>524.708</td>
                            <td>0</td>
                            <td>1.21%</td>
                            <td>852.901.546</td>
                            <td>60.65%</td>
                            <td>42.633.365</td>
                            <td>98.71%</td>
                            <td>1.406.162.001</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}