import React from 'react';
import classes from './OrderSummary.css';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingrediencies)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span className={classes.ingredient}>{igKey}</span>: {props.ingrediencies[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingrediencies:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;