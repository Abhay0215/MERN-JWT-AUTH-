import React from 'react';
import { Link } from 'react-router-dom';

function Nbar() {

            return(
                <>
                <nav className="navbar">
                    {/* <h1>klo</h1> */}
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li className="kuch"><a href="#">kuch to</a></li>
                        <hr></hr>
                    </ul>
                </nav>
                </>
            );
}

export default Nbar