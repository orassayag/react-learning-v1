import React from 'react';
import classes from './Order.css';

const Order = (props) => {
    const ingrediencies = [];
    for (let ingredientName in props.ingrediencies) {
        ingrediencies.push({
            name: ingredientName,
            amount: props.ingrediencies[ingredientName]
        });
    }

    const ingredienciesOutput = ingrediencies.map(ig => {
        return (<span className={classes.ingredient} key={ig.name}>{ig.name} ({ig.amount})</span>);
    });

    return (
        <div className={classes.order}>
            <p>
                Ingrediencies: {ingredienciesOutput}
            </p>
            <p>Price: <strong>${Number(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;