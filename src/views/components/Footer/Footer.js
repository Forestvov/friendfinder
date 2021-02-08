import React from 'react'

import logo from '../../assets/images/logo-black.png'

import FooterLinks from "./FooterLinks/FooterLinks";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterCopyRight from "./FooterCopyRight/FooterCopyRight";
import SocialLinks from "../common/SocialLinks/SocialLinks";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-wrapper">
                        <div className="col-md-3 col-sm-3">
                            <a href=""><img src={logo} alt="logo" className="footer-logo"/></a>
                            <SocialLinks/>
                        </div>

                        <FooterLinks/>

                        <FooterLinks/>

                        <FooterLinks/>

                        <FooterContacts/>

                    </div>
                </div>
            </div>

            <FooterCopyRight/>

        </footer>
    )
}

export default Footer