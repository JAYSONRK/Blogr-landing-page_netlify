import React, { useState } from "react";
import Logo from "../images/logo.svg";
import MenuIcon from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import ArrowDown  from "../images/icon-arrow-light.svg";
import ArrowUp from "../images/icon-arrow-dark.svg";
import ArrowDownM from "../images/icon-arrow-light-m.svg";
import ArrowUpM from "../images/icon-arrow-dark-m.svg"

const Header = () => {
    const [product, setProduct] = useState(false);
    const [company, setCompany] = useState(false);
    const [connect, setConnect] = useState(false);

    const [menu, setMenu] = useState(false);

    const setUpProduct = () => {
        setProduct(!product);
        setCompany(false);
        setConnect(false);
    }

    const setUpCompany = () => {
        setCompany(!company);
        setProduct(false);
        setConnect(false);
    }

    const setUpConnect = () => {
        setConnect(!connect);
        setProduct(false);
        setCompany(false);
    }


    const userMenu = () => {
        setMenu(!menu);
    }

    return (<>
        <section className="header row px-4 py-5">
            <div id="logo" className="logo col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <picture className="logo-icon">
                    <img src={Logo} alt="logo"/>
                </picture>
                <picture className="menu-icon" onClick={userMenu}>
                    {!menu ? <img src={MenuIcon} alt="menu"/> : <img src={Close} alt="close"/>}
                </picture>
                {menu && <div className="menu-items">
                    <div onClick={setUpProduct}><h6>Product&nbsp;{!product ? <img src={ArrowDownM} alt="ardown"/> :<img src={ArrowUpM} alt="ardown"/>}</h6></div>
                        {product && <ul>
                            <li><a className="dropdown-item" href="#ab">Overview</a></li>
                            <li><a className="dropdown-item" href="#ab">Pricing</a></li>
                            <li><a className="dropdown-item" href="#ab">Marketplace</a></li>
                            <li><a className="dropdown-item" href="#ab">Features</a></li>
                            <li><a className="dropdown-item" href="#ab">Integrations</a></li>
                        </ul>}
                        <div onClick={setUpCompany}><h6>Company&nbsp;{!company ? <img src={ArrowDownM} alt="ardown"/> :<img src={ArrowUpM} alt="ardown"/>}</h6></div>
                        {company && <ul>
                            <li><a className="dropdown-item" href="#ab">About</a></li>
                            <li><a className="dropdown-item" href="#ab">Team</a></li>
                            <li><a className="dropdown-item" href="#ab">Blog</a></li>
                            <li><a className="dropdown-item" href="#ab">Careers</a></li>
                        </ul>}
                        <div onClick={setUpConnect}><h6>Connect&nbsp;{!connect ? <img src={ArrowDownM} alt="ardown"/> :<img src={ArrowUpM} alt="ardown"/>}</h6></div>
                        {connect && <ul>
                            <li><a className="dropdown-item" href="#ab">Contact</a></li>
                            <li><a className="dropdown-item" href="#ab">Newsletter</a></li>
                            <li><a className="dropdown-item" href="#ab">LinkedIn</a></li>
                        </ul>}
                    <div>
                        <button>Login</button>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </div>}
            </div>
                <div className="logoD left-part col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <picture className="logo-icon">
                        <img src={Logo} alt="logo"/>
                    </picture>
                    <div className="dropdown" onClick={setUpProduct}>
                        <div  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><h6>Product&nbsp;{!product ? <img src={ArrowDown} alt="ardown"/> :<img src={ArrowUp} alt="ardown"/>}</h6></div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#ab">Overview</a></li>
                            <li><a className="dropdown-item" href="#ab">Pricing</a></li>
                            <li><a className="dropdown-item" href="#ab">Marketplace</a></li>
                            <li><a className="dropdown-item" href="#ab">Features</a></li>
                            <li><a className="dropdown-item" href="#ab">Integrations</a></li>
                        </ul>
                    </div>
                    <div className="dropdown" onClick={setUpCompany}>
                        <div  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><h6>Company&nbsp;{!company ? <img src={ArrowDown} alt="ardown"/> :<img src={ArrowUp} alt="ardown"/>}</h6></div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#ab">About</a></li>
                            <li><a className="dropdown-item" href="#ab">Team</a></li>
                            <li><a className="dropdown-item" href="#ab">Blog</a></li>
                            <li><a className="dropdown-item" href="#ab">Careers</a></li>
                        </ul>
                    </div>
                    <div className="dropdown" onClick={setUpConnect}>
                        <div id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><h6>Connect&nbsp;{!connect ? <img src={ArrowDown} alt="ardown"/> :<img src={ArrowUp} alt="ardown"/>}</h6></div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#ab">Contact</a></li>
                            <li><a className="dropdown-item" href="#ab">Newsletter</a></li>
                            <li><a className="dropdown-item" href="#ab">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="logoD right-part col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div>
                        <button>Login</button>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </div>
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="buttons">
                <button className="me-3">Start for Free</button>
                <button>Learn More</button>
            </div>
        </section>
    </>)
}

export default Header;