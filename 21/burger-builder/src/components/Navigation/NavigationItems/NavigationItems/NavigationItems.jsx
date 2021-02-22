import React from 'react';
import classes from './NavigationItems.css';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    let auth = (
        <NavigationItem link="/auth">Authenticate</NavigationItem>
    );

    if (props.isAuthenticated) {
        auth = (
            <Auxiliary>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </Auxiliary>
        );
    }

    return (
        <ul className={classes['navigation-items']}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            {auth}
        </ul>
    );
};

export default NavigationItems;