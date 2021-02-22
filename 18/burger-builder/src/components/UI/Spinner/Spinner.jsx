import React from 'react';
import classes from './Spinner.css';

const Spinner = (props) => {
    let classSpinner = [classes.loader];
    if (props.init) {
        classSpinner.push(classes.init);
    }

    return (
        <div className={classSpinner.join(' ')}>Loading...</div>
    );
};

export default Spinner;