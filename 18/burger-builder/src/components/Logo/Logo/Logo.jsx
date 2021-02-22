import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../../assets/images/burger-logo.png';

const Logo = (props) => {
    return (
        <div className={classes.logo}>
            <img src={burgerLogo} alt="Burger Builder" title="Burger Builder" />
        </div>
    );
};

export default Logo;