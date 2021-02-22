import React, { Component } from 'react';
import classes from './OrderSummary.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    render() {
        const ingredientSummary = Object.keys(this.props.ingrediencies)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span className={classes.ingredient}>{igKey}</span>: {this.props.ingrediencies[igKey]}
                    </li>
                );
            });

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingrediencies:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;