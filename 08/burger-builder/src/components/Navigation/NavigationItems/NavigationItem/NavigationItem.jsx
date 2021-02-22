import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    let classItem = null;
    if (props.active) {
        classItem = classes.active;
    }

    return (
        <li className={classes['navigation-item']}>
            <a href={props.link} className={classItem}>{props.children}</a>
        </li>
    );
};

export default NavigationItem;