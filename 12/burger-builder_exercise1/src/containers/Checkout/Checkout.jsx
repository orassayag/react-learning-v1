import React, { Component } from 'react';
import api from '../../api/api';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Redirect } from 'react-router-dom';

class Checkout extends Component {
    state = {
        orderId: null,
        ingrediencies: null
    }

    componentDidMount() {
        const orderId = this.props.match.params.id;
        if (orderId) {
            this.setState({ orderId: orderId });
            api.get(`/orders/${orderId}.json`)
                .then(response => {
                    console.log(response);
                    if (response && response.data && response.data.ingrediencies) {
                        this.setState({ ingrediencies: response.data.ingrediencies });
                    }
                }).catch(error => {
                    this.setState({ error: true });
                });
        }
    }

    render() {
        let ingrediencies = null;
        if (this.state.ingrediencies) {
            ingrediencies = (<CheckoutSummary ingrediencies={this.state.ingrediencies} />);
        }

        if (!this.props.match.params.id) {
            ingrediencies = (<Redirect to="/" />);
        }

        return (
            <div>
                {ingrediencies}
            </div>
        );
    }
}

export default Checkout;