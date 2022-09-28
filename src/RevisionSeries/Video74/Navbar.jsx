import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <>

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand menu_active" to="/">StudyCircle</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link menu_active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link menu_active" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link menu_active" to="/service">Service</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link menu_active" to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
