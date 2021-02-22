import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import NavigationItems from '../NavigationItems/NavigationItems/NavigationItems';

const SideDrawer = (props) => {
    let attachedClasses = [classes['side-drawer'], classes.close];
    if (props.open) {
        attachedClasses = [classes['side-drawer'], classes.open];
    }

    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;