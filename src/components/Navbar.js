import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';




//while passing the prop Navbar(prop) is necessary.
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">


                    {/* Inorder to pass the promp we use {prop.title} */}
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>


                    </ul>
                  
                    <div className={`orm-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.change}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
};
Navbar.defaultProps = {
    title: 'set title here',
    home: 'Home',
};