import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import api from '../../api/api';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Burger from '../../components/Burger/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
    /*     constructor(props) {
            super(props);
        } */

    state = {
        purchasing: false,
        loading: false,
        error: null
    };

    updatePurchaseState = (ingrediencies) => {
        const sum = Object.keys(ingrediencies)
            .map(igKey => {
                return ingrediencies[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.history.replace('/checkout');
    }

    componentDidMount() {
        console.log(this.props);
        /*         api.get('/ingrediencies.json')
                    .then(response => {
                        this.setState({ ingrediencies: response.data });
                    }).catch(error => {
                        console.log(error);
                        this.setState({ error: true });
                    }); */
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = null;
        if (this.state.error) {
            burger = (<p>Ingrediencies can't be loaded!</p>);
        }
        else {
            burger = (<Spinner init={true} />);
        }

        if (this.props.ings) {
            burger = (
                <Auxiliary>
                    <Burger ingrediencies={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler} />
                </Auxiliary>
            );

            orderSummary = (
                <OrderSummary
                    price={this.props.price}
                    ingrediencies={this.props.ings}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} />
            );
        }

        if (this.state.loading) {
            orderSummary = (<Spinner init={false} />);
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingrediencies,
        price: state.totalPrice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingredientName) => {
            return dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName });
        },
        onIngredientRemoved: (ingredientName) => {
            return dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, api));