// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../Images/fitness.png"
import "./Header.css"

const Header = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <h2>FANTASY GYM </h2>
        </div>

    );
};

export default Header;