import React from 'react'

import logo from '../../../assets/images/logo.png'

const NavbarHeader = () => {
    return (
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index-register.html">
                <img src={logo} alt="logo"/></a>
        </div>
    )
}

export default NavbarHeader