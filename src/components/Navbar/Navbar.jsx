import React from 'react';

import './Navbar.css';



export default function Navbar () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">VACCOVID</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">COVID-19</a>
                            </li>
                            <li>
                                <a className="nav-link active" aria-current="page" href="#">VACCINE</a>
                            </li>
                            <li>
                                <a className="nav-link active" aria-current="page" href="#">TREATMENT</a>
                            </li>
                            <li>
                                <a className="nav-link active" aria-current="page" href="#">MAP</a>
                            </li>
                            <li>
                                <a className="nav-link active" aria-current="page" href="#">NEWS</a>
                            </li>
                            <li>
                                <a className="nav-link active" aria-current="page" href="#">ARTICLES</a>
                            </li>
                            <li>
                                <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}