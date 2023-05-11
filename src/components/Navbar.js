import React from 'react'
import PropTypes from 'prop-types'




//while passing the prop Navbar(prop) is necessary.
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>


                    </ul>
                    <form className="d-flex input-group w-auto">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Text"
                            aria-label="Search"
                        />

                        <span className="input-group-text border-0 d-none d-lg-flex"
                        ><i className="fas fa-search"></i
                        ></span>


                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
            title: PropTypes.string,
            home: PropTypes.string,
};
Navbar.defaultProps ={
    title: 'set title here',
    home: 'Home',
};