import React, { Component } from 'react';
import api from '../../../api/api';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingrediencies: this.props.ingrediencies,
            price: this.props.price,
            customer: {
                name: 'Or Assayag',
                address: {
                    street: 'Hamapilim 16',
                    zipCode: '345423',
                    country: 'Israel'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        api.post('/orders.json', order)
            .then(response => {
                // console.log(response);
                this.setState({ loading: false });
                this.props.history.replace('/');
            }).catch(error => {
                // console.log(error);
                this.setState({ loading: false });
            });
    };

    render() {
        let form = (
            <form>
                <input type="text" className={classes.input} name="name" placeholder="Your Name" />
                <input type="email" className={classes.input} name="email" placeholder="Your Email" />
                <input type="text" className={classes.input} name="street" placeholder="Street" />
                <input type="text" className={classes.input} name="postal" placeholder="Postal Code" />
                <Button btnType="success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = (<Spinner />);
        }

        return (
            <div className={classes['contact-data']}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;