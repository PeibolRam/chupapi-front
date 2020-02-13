import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../../styles/navbar.css'
import logo from '../../media/logo.png'


const Navbar = () => {
    return(
        <div className="head_chupapi">
            <img src={logo} alt=""/> 
            <ul className="navbar_chupapi">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search drink</Link></li>
                <li><Link to="/api">API</Link></li>
            </ul>
        </div>
    )
} 

export default Navbar;