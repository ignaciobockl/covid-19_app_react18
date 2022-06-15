import React from 'react';

import Nav from '../Nav/Nav';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';

import './HomePage.css';



export default function HomePage () {
    return (
        <div className="container-fluid div__margin">

            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            
                <div className="w-100"></div>

                <div className="col-2">
                    <Nav />
                </div>
                <div className="col-10">
                    <Table />
                </div>
            </div>

        </div>
    )
}