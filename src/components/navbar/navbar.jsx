import React, { Component } from 'react'
import './navbar.css'
import {NavLink, isActive } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid w-50 ">
                <NavLink   className={"navbar-brand linkNavbar mainTitlesize"} to="/" >START REACT</NavLink >
                <div className='ms-auto'>
                   
                    <button className="navbar-toggler navbarButton " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span className='navbar-menu'>MENU</span> <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                            <NavLink  className="nav-link active linkNavbar navlinkSIZE" activeClassName="activeLink"aria-current="page" to="/portfolio">PORTFOLIO</NavLink >
                            </li>
                            <li className="nav-item ">
                            <NavLink  className="nav-link active linkNavbar navlinkSIZE"activeClassName="activeLink" to="/about">ABOUT</NavLink >
                            </li>
                            <li className="nav-item ">
                            <NavLink  className="nav-link active linkNavbar navlinkSIZE"activeClassName="activeLink" to="/contact">CONTACT</NavLink >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  }
}
