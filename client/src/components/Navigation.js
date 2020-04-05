import React from 'react';
import airbnb_logo from "../img/airbnb-logo.png";

const Navigation=()=>{
    return (
        <nav className="navigation">
            <div className = "nav__item nav__item--1">
                {/* <img className = "nav__item--1__img" src={airbnb_logo} alt="airbnb_logo"/> */}
                Airbnb Logo
            </div>
            <div className = "nav__item nav__item--2">English (US)</div>
            <div className = "nav__item nav__item--3">USD</div>
            <div className = "nav__item nav__item--4">Host a home</div>
            <div className = "nav__item nav__item--5">Host an experience</div>
            <div className = "nav__item nav__item--6">Help</div>
            <div className = "nav__item nav__item--7">Sign up</div>
            <div className = "nav__item nav__item--8">Log In</div>
        </nav>
    )
};

export default Navigation;