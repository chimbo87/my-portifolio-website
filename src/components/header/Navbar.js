import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar(){
    
    return(
      <nav className="navbar navbar-expand-lg" id='navBarBox'>
      <div className="container">
        <a className="navbar-brand" href="#" id='logo'>archford</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span ></span>
          <span ></span>
          <span ></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 position-sticky">
                <li className="nav-item">
                <Link className="nav-link"  to={"/home"} id="navTxt">home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to={"/about"} id="navTxt">about</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to={"/project"} id="navTxt">project</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to={"/contact"} id="navTxt">contact</Link>
                </li>
                </ul>
          <ul className ="navbar-nav ml-auto">
            <button className="btn" type="submit" id='textBtn'>let's chat</button>
          </ul>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;
