import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const BurgerIngredient = (props) => {
    let ingredient = null;

    if (props.type === 'bread-top') {
        ingredient = (
            <div className={classes['bread-top']}>
                <div className={classes.seeds1}></div>
                <div className={classes.seeds2}></div>
            </div>
        );
    }
    else {
        ingredient = (
            <div className={classes[props.type]}></div>
        );
    }
    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;