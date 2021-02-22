import React from 'react';
import classes from './PizzaImage.css';
import pizzaImage from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
    return (
        <div className={classes['pizza-image-container']}>
            <img src={pizzaImage} className={classes['pizza-image']} />
        </div>
    );
};

export default PizzaImage;