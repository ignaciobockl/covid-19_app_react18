import React from 'react';

import { useGetCountriesStatisticalDataQuery } from '../../services/covidApi';

import './Table.css';



export default function Table () {

    const { data: countries, isLoading, isFetching, isSuccess, isError, error } = useGetCountriesStatisticalDataQuery();
    console.log('data', countries);
    console.log('isLoading', isLoading);
    console.log('isFetching', isFetching);
    console.log('isSuccess', isSuccess);
    console.log('isError', isError);
    console.log('error', error);

    return (
        <table className="table table-hover">
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
            <tbody>
                {
                    isFetching
                    ?   
                        <tr>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                        </tr>
                    :
                        <>
                            {
                                countries.map((data) => (
                                    <tr key={ data.id }>
                                        <td>{ data.rank }</td>
                                        <td>{ data.Country }</td>
                                        <td>{ data.TotalCases }</td>
                                        <td>{ data.NewCases }</td>
                                        <td>{ data.Infection_Risk }</td>
                                        <td>{ data.Serious_Critical }</td>
                                        <td>{ data.ActiveCases }</td>
                                        <td>{ data.TotalDeaths }</td>
                                        <td>{ data.NewDeaths }</td>
                                        <td>{ data.Case_Fatality_Rate }</td>
                                        <td>{ data.TotalTests }</td>
                                        <td>{ data.Test_Percentage }</td>
                                        <td>{ data.TotalRecovered }</td>
                                        <td>{ data.Recovery_Proporation }</td>
                                        <td>{ data.Population }</td>
                                    </tr>
                                ))
                            }
                        </>
                }
            </tbody>
        </table>
    )
}