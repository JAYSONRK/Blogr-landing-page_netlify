import React from "react";
import LogoF from "../images/logo.svg";

const Footer = () => {
    return (<>
        <section className="footer row">
            <picture className="logo-footer col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <img src={LogoF} alt="logo"/>
            </picture>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <h4>Product</h4>
                <ul>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <h4>Connect</h4>
                <ul>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </section>
    </>)
}

export default Footer;