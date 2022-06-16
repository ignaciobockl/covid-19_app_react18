import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { 
    useGetAllAfricaCountriesDataQuery, 
    useGetAllAsianCountriesDataQuery, 
    useGetAllAustraliaAndOceaniaCountriesDataQuery, 
    useGetAllEuropeCountriesDataQuery, 
    useGetCountriesStatisticalDataQuery 
} from '../../services/covidApi';



export default function Table () {

    const { value: continentName } = useSelector( state => state.continent );

    let { data, isFetching: isFetchingWorld } = useGetCountriesStatisticalDataQuery();
    let { data: dataAfrica, isFetching: isFetchingAfrica } = useGetAllAfricaCountriesDataQuery();
    let { data: dataAsian, isFetching: isFetchingAsian } = useGetAllAsianCountriesDataQuery();
    let { data: dataAustraliaOceania, isFetching: isFetchingAustraliaOceania } = 
        useGetAllAustraliaAndOceaniaCountriesDataQuery();
    let { data: dataEurope, isFetchingEurope } = useGetAllEuropeCountriesDataQuery();

    const [ countries, setCountries ] = useState(data);
    const [ isFetching, setIsFetching ] = useState(false);

    useEffect(() => {
        if ( continentName === 'Africa' ) { 
            setCountries( dataAfrica );
            setIsFetching( isFetchingAfrica );
        }
        else if ( continentName === 'Asian' ) {
            setCountries(dataAsian);
            setIsFetching(isFetchingAsian);
        }
        else if ( continentName === 'Australia and Oceania') {
            setCountries( dataAustraliaOceania );
            setIsFetching( isFetchingAustraliaOceania );
        }
        else if ( continentName === 'Europe') {
            setCountries( dataEurope );
            setIsFetching( isFetchingEurope );
        }
        else {
            setCountries(data);
            setIsFetching(isFetchingWorld);
        }
    }, [ continentName, countries, data ]);

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
                                countries !== undefined  &&
                                countries.map((country) => (
                                    <tr key={ country.id }>
                                        <td>{ country.rank }</td>
                                        <td>{ country.Country }</td>
                                        <td>{ country.TotalCases }</td>
                                        <td>{ country.NewCases }</td>
                                        <td>{ country.Infection_Risk }</td>
                                        <td>{ country.Serious_Critical }</td>
                                        <td>{ country.ActiveCases }</td>
                                        <td>{ country.TotalDeaths }</td>
                                        <td>{ country.NewDeaths }</td>
                                        <td>{ country.Case_Fatality_Rate }</td>
                                        <td>{ country.TotalTests }</td>
                                        <td>{ country.Test_Percentage }</td>
                                        <td>{ country.TotalRecovered }</td>
                                        <td>{ country.Recovery_Proporation }</td>
                                        <td>{ country.Population }</td>
                                    </tr>
                                ))
                            }
                        </>
                }
            </tbody>
        </table>
    )
}