import React from 'react';
import Logo from '../../Logo/Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems/NavigationItems';
import classes from './Toolbar.css';

const Toolbar = (props) => {
    return (
        <header className={classes.toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.logo}>
                <Logo />
            </div>
            <nav className={classes['desktop-only']}>
                <NavigationItems isAuthenticated={props.isAuthenticated} />
            </nav>
        </header>
    );
};

export default Toolbar;