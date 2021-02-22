import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <li className={classes['navigation-item']}>
            <NavLink
                to={props.link}
                activeClassName={classes.active}
                exact={props.exact}>
                {props.children}</NavLink>
        </li>
    );
};

export default NavigationItem;