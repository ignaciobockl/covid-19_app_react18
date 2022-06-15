import React, { useEffect, useState } from 'react';

import { useGetCountriesStatisticalDataQuery } from '../../services/covidApi';

import './Nav.css';



const continents = [ 'Africa', 'Asian', 'Australia', 'Europe', 'North America', 'Oceania', 'South America' ];
localStorage.setItem('continentName', 'World');

export default function Nav () {

    let { data, isFetching: isFetchingWorld } = useGetCountriesStatisticalDataQuery();

    const [ continentName, setContinentName ] = useState('World');
    const [ countries, setCountries ] = useState(data);
    const [ isFetching, setIsFetching ] = useState(false);

    useEffect(() => {
        setCountries(data);
        setIsFetching(isFetchingWorld);
    }, [ data ]);

    // ------------------------------- Event Click -------------------------------------- //
    const handleContinentClick = (e) => {
        setContinentName(e);
        // console.log("🚀 ~ file: Nav.jsx ~ line 28 ~ handleContinentClick ~ e", e)
    }

    useEffect(() => {
        localStorage.setItem('continentName', continentName);
    }, [ continentName ]);
    // ----------------------------------------------------------------------------------- //

    let arrayCountries = [];
    if ( !isFetching && data !== undefined && countries !== undefined ) {

        // generate an array with all countries
        for (let index = 0; index < countries.length; index++) {
            arrayCountries = arrayCountries.concat(countries[index].Country);
        }
        // ------------------------------------------------------------------ //

        // array.shift() removes the first element of an array
        for (let index2 = 0; index2 < 2; index2++) {
            arrayCountries.shift();
        }
        // ------------------------------------------------------------------ //

        // array.sort() sorts the elements of an array in this case alphabetically
        arrayCountries.sort();
        // ------------------------------------------------------------------ //
    }

    return (
        <div className="vertical__menu">
            <nav className="nav nav-pills flex-column flex-sm-row">
                <ul>
                    <a 
                        aria-current="page"
                        className="flex-sm-fill text-sm-center nav-link active"
                        // href="/world-data"
                        onClick={ () => handleContinentClick('World') }
                    >
                        World
                    </a>
                    <h2>Continents</h2>
                    {
                        continents.map((cont, index) => (
                            <a 
                                aria-current="page" 
                                className="flex-sm-fill text-sm-center nav-link active" 
                                // href={`/${cont.toLowerCase()}-data`}
                                key={ index }
                                onClick={ () => handleContinentClick(cont) }
                                // POSIBLE SOLUCION
                                // https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes/
                            >
                                { cont }
                            </a>
                        ))
                    }
                    <h2>Most Viewed</h2>
                    {
                        // falta los mas buscados
                    }
                    <h2>Countries</h2>
                    {
                        arrayCountries.length === 0
                            ?
                            <a 
                                aria-current="page"
                                className="flex-sm-fill text-sm-center nav-link active"
                            >
                                Loading...
                            </a>
                            :
                            arrayCountries.map((country, index) =>(
                                <a 
                                    aria-current="page"
                                    className="flex-sm-fill text-sm-center nav-link active"
                                    href="#"
                                    key={ index }
                                >
                                    { country }
                                </a>
                            ))
                    }
                </ul>
            </nav>
             
        </div>
    )
}
