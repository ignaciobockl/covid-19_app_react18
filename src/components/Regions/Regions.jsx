import React from 'react';

const continents = [ 'Africa', 'Asian', 'Australia', 'Europe', 'North America', 'Oceania', 'South America' ];

export default function Regions () {
    return (
        <div className="">
            <nav className="nav nav-pills flex-column flex-sm-row">
                <ul>
                    <a className="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="/world-data">
                        World
                    </a>
                    <h2>Continents</h2>
                    {
                        continents.map(cont => (
                            <>
                                <a 
                                    aria-current="page" 
                                    className="flex-sm-fill text-sm-center nav-link active" 
                                    href={`/${cont.toLowerCase()}-data`}
                                >
                                    { cont }
                                </a>
                            </>
                        ))
                    }
                    <h2>Most Viewed</h2>
                    {
                        
                    }
                    <h2>Countries</h2>
                </ul>
            </nav>
            
        </div>
    )
}