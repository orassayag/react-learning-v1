import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingrediencies: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingrediencies = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            }
            else {
                ingrediencies[param[0]] = Number(param[1]);
            }
        }
        this.setState({ ingrediencies: ingrediencies, totalPrice: price });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    ingrediencies={this.state.ingrediencies} />
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    render={(props) => {
                        return (<ContactData
                            ingrediencies={this.state.ingrediencies}
                            price={this.state.totalPrice}
                            {...props} />);
                    }} />
            </div>
        );
    }
}

export default Checkout;