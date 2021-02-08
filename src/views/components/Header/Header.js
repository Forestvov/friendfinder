import React from 'react'

import NavbarHeader from "./NavbarHeader/NavbarHeader";
import MenuHeader from "./MenuHeader/MenuHeader";
import SearchFormHeader from "./SearchFormHeader/SearchFormHeader";


const Header = () => {
    return (
        <header id="header">
            <nav className="navbar navbar-default navbar-fixed-top menu">
                <div className="container">
                    <NavbarHeader/>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <MenuHeader/>
                        <SearchFormHeader/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header