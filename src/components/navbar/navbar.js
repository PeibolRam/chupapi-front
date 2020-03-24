import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../../styles/navbar.css'


const Navbar = () => {
    return(
        <div className="head_chupapi">
            <Link to="/"><img src="https://apistear-drinks.herokuapp.com/public/logo.png" alt=""/> </Link>
            <ul className="navbar_chupapi">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/drinks">Drinks</Link></li>
                <li><Link to="/api">API</Link></li>
            </ul>
        </div>
    )
} 

export default Navbar;