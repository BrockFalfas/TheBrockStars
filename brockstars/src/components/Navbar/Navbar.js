import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <h1 className="navbar-item subtitle">The Brockstars</h1>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">         
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/about" className="navbar-item">About</Link>
                    <Link to="/contact" className="navbar-item">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
