import React from 'react';
import * as GhibliLogo from '../images/studio_ghibli_logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="p-3">
            <img id="ghibli-logo" src={GhibliLogo} alt="studio-ghibli-logo" />
            Studio Ghibli Reference Center
          <div className="link-group">
                <Link to="/">
                    <button className="btn btn-dark ml-4 m-2">Home</button>
                </Link>
                <Link to="/films">
                    <button className="btn btn-dark m-2">Films</button>
                </Link>
                <Link to="/people">
                    <button className="btn btn-dark m-2">People</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
