import React, { Component } from 'react';
import { api, cancelToken } from '../../api/api';
import Order from '../../components/Order/Order/Order';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

const CancelToken = cancelToken;
let cancel;

class Orders extends Component {
    asyncRequest = null;
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.asyncRequest = api.get('/orders.json', {
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancel = c;
            })
        })
            .then(response => {
                this.asyncRequest = null;
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
                console.log(error);
                this.asyncRequest = null;
                if (error.toString() !== 'Cancel') {
                    this.setState({ loading: false });
                }
            });
    }

    componentWillUnmount() {
        if (this.asyncRequest) {
            cancel();
        }
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