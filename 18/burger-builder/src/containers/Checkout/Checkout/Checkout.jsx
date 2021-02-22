import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = (
            <Redirect to="/" />
        );

        if (this.props.ings) {
            let purchasedRedirect = (
                <Redirect to="/" />
            );

            if (!this.props.purchased) {
                purchasedRedirect = null;
            }

            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        checkoutContinued={this.checkoutContinuedHandler}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        ingrediencies={this.props.ings} />
                    <Route
                        path={`${this.props.match.path}/contact-data`}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingrediencies,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(Checkout);