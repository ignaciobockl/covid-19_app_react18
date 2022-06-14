import React from 'react';

import './Navbar.css';



const navbarOptions = [ 'ABOUT', 'ARTICLES', 'COVID-19', 'MAPS', 'NEWS', 'TREATMENT', 'VACCINE' ];

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg vaccovid__navbar">
            <div className="container-fluid">
                <a className="navbar-brand vaccovid__name" href="#">VACCOVID</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        {
                            navbarOptions.map((item, index) => (
                                <li className="nav-item">
                                    <a 
                                        aria-current="page"
                                        className="nav-link active"
                                        href="#"
                                        key={ index }
                                    >
                                        { item }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}