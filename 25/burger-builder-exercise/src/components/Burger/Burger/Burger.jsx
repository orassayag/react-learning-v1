import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingrediencies)
        .map(ingKey => {
            return [...Array(props.ingrediencies[ingKey])].map((_, i) => {
                return (<BurgerIngredient key={ingKey + i} type={ingKey} />);
            });
        });

    const sum = Object.keys(props.ingrediencies)
        .map(igKey => {
            return props.ingrediencies[igKey];
        }).reduce((elSum, el) => {
            return elSum + el;
        }, 0);;

    if (sum === 0) {
        transformedIngredients = (<p>Please start adding ingrediencies!</p>);
    }

    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;