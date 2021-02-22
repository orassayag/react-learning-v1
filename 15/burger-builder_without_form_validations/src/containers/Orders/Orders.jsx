import React, { Component } from 'react';
import api from '../../api/api';
import Order from '../../components/Order/Order/Order';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        api.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                if (response && response.data) {
                    for (let key in response.data) {
                        fetchedOrders.push({
                            id: key,
                            ...response.data[key]
                        });
                    }
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return (<Order
                        key={order.id}
                        ingrediencies={order.ingrediencies}
                        price={order.price} />);
                })}
            </div>
        );
    }
}

export default ErrorHandler(Orders, api);