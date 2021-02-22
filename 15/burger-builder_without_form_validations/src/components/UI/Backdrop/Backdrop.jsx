import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
    let backdrop = null;
    if (props.show) {
        backdrop = (
            <div className={classes.backdrop}
                onClick={props.clicked}>
            </div>
        );
    }
    return backdrop;
};

export default Backdrop;