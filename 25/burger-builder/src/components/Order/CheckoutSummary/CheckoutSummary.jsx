import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
    return (
        <div className={classes['checkout-summary']}>
            <h1>We hope it taste well!</h1>
            <div className={classes['burger-preview']}>
                <Burger ingrediencies={props.ingrediencies} />
            </div>
            <Button
                btnType="danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType="success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummary;