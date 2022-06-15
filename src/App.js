import React, { useEffect, useState } from 'react';

import { useGetAllAsianCountriesDataQuery, useGetCountriesStatisticalDataQuery } from './services/covidApi';

import './App.css';
import HomePage from './components/HomePage/HomePage';



const continents = [ 'Africa', 'Asian', 'Australia', 'Europe', 'North America', 'Oceania', 'South America' ];

export default function App() {

    let { data, isFetching: isFetchingWorld } = useGetCountriesStatisticalDataQuery();
    let { data: dataAsian, isFetching: isFetchingAsian } = useGetAllAsianCountriesDataQuery();

    const [ continentName, setContinentName ] = useState(' ');
    const [ countries, setCountries ] = useState(data);
    const [ isFetching, setIsFetching ] = useState(false);

    useEffect(() => {
        setCountries(data);
    }, [ data ]);
    
    // INTENTA BORRAR LOS PRIMEROS 2 OBJETOS DEL ARRAY
    // if ( !isFetching && countries !== undefined && countries.length > 1 ) {
    //     // array.shift() removes the first element of an array
    //     for (let index3 = 0; index3 < 2; index3++) {
    //         countries.shift();
    //         console.log('countries', countries)
    //     }
    // }

    // console.log('data', countries);
    // console.log('isLoading', isLoading);
    // console.log('isFetching', isFetching);
    // console.log('isSuccess', isSuccess);
    // console.log('isError', isError);
    // console.log('error', error);

    // -------------------------------------------------------------------------------------- //
    const handleContinentClick = (e) => {
        // e.preventDefault();
        setContinentName(e);
    }

    useEffect(() => {
        if ( continentName === 'Africa' ) {  }
        else if ( continentName === 'Asian' ) {
            setCountries(dataAsian);
            setIsFetching(isFetchingAsian);
        }
        else {
            setCountries(data);
            setIsFetching(isFetchingWorld);
        }
    }, [ continentName, countries ]);
    // -------------------------------------------------------------------------------------- //

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

        <HomePage />

        // <div className="App">
        //     {/* Navbar */}
        //     <div>
        //         <nav className="navbar navbar-expand-lg">
        //             <div className="container-fluid">
        //                 <a className="navbar-brand" href="#">VACCOVID</a>
        //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span className="navbar-toggler-icon"></span>
        //                 </button>
        //                 <div className="collapse navbar-collapse" id="navbarScroll">
        //                     <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        //                         <li className="nav-item">
        //                             <a className="nav-link active" aria-current="page" href="#">COVID-19</a>
        //                         </li>
        //                         <li>
        //                             <a className="nav-link active" aria-current="page" href="#">VACCINE</a>
        //                         </li>
        //                         <li>
        //                             <a className="nav-link active" aria-current="page" href="#">TREATMENT</a>
        //                         </li>
        //                         <li>
        //                             <a className="nav-link active" aria-current="page" href="#">MAP</a>
        //                         </li>
        //                         <li>
        //                             <a className="nav-link active" aria-current="page" href="#">NEWS</a>
        //                         </li>
        //                         <li>
        //                             <a className="nav-link active" aria-current="page" href="#">ARTICLES</a>
        //                         </li>
        //                         <li>
        //                             <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>
        //     {/* --------------------------------------------------------------------------------------- */}

        //     {/* REGIONS */}
        //     <div className="vertical__menu">
        //         <nav className="nav nav-pills flex-column flex-sm-row">
        //             <ul>
        //                 <a 
        //                     aria-current="page"
        //                     className="flex-sm-fill text-sm-center nav-link active"
        //                     href="/world-data"
        //                 >
        //                     World
        //                 </a>
        //                 <h2>Continents</h2>
        //                 {
        //                     continents.map((cont, index) => (
        //                         <a 
        //                             aria-current="page" 
        //                             className="flex-sm-fill text-sm-center nav-link active" 
        //                             // href={`/${cont.toLowerCase()}-data`}
        //                             key={ index }
        //                             onClick={ () => handleContinentClick(cont) }
        //                             // POSIBLE SOLUCION
        //                             // https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes/
        //                         >
        //                             { cont }
        //                         </a>
        //                     ))
        //                 }
        //                 <h2>Most Viewed</h2>
        //                 {
        //                     // falta los mas buscados
        //                 }
        //                 <h2>Countries</h2>
        //                 {
        //                     arrayCountries.length === 0
        //                         ?
        //                         <a 
        //                             aria-current="page"
        //                             className="flex-sm-fill text-sm-center nav-link active"
        //                         >
        //                             Loading...
        //                         </a>
        //                         :
        //                         arrayCountries.map((country, index) =>(
        //                             <a 
        //                                 aria-current="page"
        //                                 className="flex-sm-fill text-sm-center nav-link active"
        //                                 href="#"
        //                                 key={ index }
        //                             >
        //                                 { country }
        //                             </a>
        //                         ))
        //                 }
        //             </ul>
        //         </nav>
                    
        //     </div>
        //     {/* ---------------------------------------------------------------------------------------- */}

        //     {/* Table */}
        //     <table className="table table-hover">
        //         <thead>
        //             <tr>
        //                 <th>NUM</th>
        //                 <th>COUNTRY</th>
        //                 <th>TOTAL CASES</th>
        //                 <th>NEW CASES</th>
        //                 <th>INFECTION RISK</th>
        //                 <th>SERIOUS, CRITICAL</th>
        //                 <th>ACTIVE CASES</th>
        //                 <th>TOTAL DEATHS</th>
        //                 <th>NEW DEATHS</th>
        //                 <th>CASE FATALITY RATE(CFR)</th>
        //                 <th>TOTAL TESTS</th>
        //                 <th>TEST PERCENTAGE</th>
        //                 <th>TOTAL RECOVERED</th>
        //                 <th>RECOVERY PERCENTAGE</th>
        //                 <th>POPULATION</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 isFetching
        //                 ?   
        //                     <tr>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                         <td>Loading...</td>
        //                     </tr>
        //                 :
        //                     <>
        //                         {
        //                             countries !== undefined  &&
        //                             countries.map((country) => (
        //                                 <tr key={ country.id }>
        //                                     <td>{ country.rank }</td>
        //                                     <td>{ country.Country }</td>
        //                                     <td>{ country.TotalCases }</td>
        //                                     <td>{ country.NewCases }</td>
        //                                     <td>{ country.Infection_Risk }</td>
        //                                     <td>{ country.Serious_Critical }</td>
        //                                     <td>{ country.ActiveCases }</td>
        //                                     <td>{ country.TotalDeaths }</td>
        //                                     <td>{ country.NewDeaths }</td>
        //                                     <td>{ country.Case_Fatality_Rate }</td>
        //                                     <td>{ country.TotalTests }</td>
        //                                     <td>{ country.Test_Percentage }</td>
        //                                     <td>{ country.TotalRecovered }</td>
        //                                     <td>{ country.Recovery_Proporation }</td>
        //                                     <td>{ country.Population }</td>
        //                                 </tr>
        //                             ))
        //                         }
        //                     </>
        //             }
        //         </tbody>
        //     </table>
        //     {/* --------------------------------------------------------------------------- */}
        // </div>
    );
}