import React from 'react';
import Logo from '../../Logo/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems/NavigationItems';
import classes from './Toolbar.css';

const Toolbar = (props) => {
    return (
        <header className={classes.toolbar}>
            <div>MENU</div>
            <div className={classes.logo}>
                <Logo />
            </div>
            <nav className={classes['desktop-only']}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;