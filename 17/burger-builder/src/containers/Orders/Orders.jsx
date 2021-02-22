import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import api from '../../api/api';
import Order from '../../components/Order/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = (
            <Spinner init={true} />
        );

        if (!this.props.loading) {
            orders = (
                this.props.orders.map(order => {
                    return (<Order
                        key={order.id}
                        ingrediencies={order.ingrediencies}
                        price={order.price} />);
                })
            );
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: () => {
            return dispatch(actions.fetchOrders());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(Orders, api));