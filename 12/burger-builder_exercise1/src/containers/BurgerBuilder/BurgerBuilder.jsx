import React, { Component } from 'react';
import api from '../../api/api';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Burger from '../../components/Burger/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    /*     constructor(props) {
            super(props);
        } */

    state = {
        ingrediencies: null,
        totalPrice: 4,
        purchasable: false,
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

        this.setState({ purchasable: sum > 0 });
    }

    addIngredienciesHandler = (type) => {
        const oldCount = this.state.ingrediencies[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediencies = {
            ...this.state.ingrediencies
        };
        updatedIngrediencies[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({ ingrediencies: updatedIngrediencies, totalPrice: updatedPrice });
        this.updatePurchaseState(updatedIngrediencies);
    }

    removeIngredienciesHandler = (type) => {
        const oldCount = this.state.ingrediencies[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngrediencies = {
            ...this.state.ingrediencies
        };
        updatedIngrediencies[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceDeduction;
        this.setState({ ingrediencies: updatedIngrediencies, totalPrice: updatedPrice });
        this.updatePurchaseState(updatedIngrediencies);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');

        this.setState({ loading: true });
        const order = {
            ingrediencies: this.state.ingrediencies,
            price: this.state.totalPrice,
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
                console.log(response);
                if (response && response.data && response.data.name) {
                    this.setState({ loading: false, purchasing: false });
                    this.props.history.push(`/checkout/${response.data.name}`);
                }
                else {
                    this.setState({ loading: false, purchasing: false });
                }
            }).catch(error => {
                // console.log(error);
                this.setState({ loading: false, purchasing: false });
            });
    }

    componentDidMount() {
        api.get('/ingrediencies.json')
            .then(response => {
                this.setState({ ingrediencies: response.data });
            }).catch(error => {
                this.setState({ error: true });
            });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingrediencies
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

        if (this.state.ingrediencies) {
            burger = (
                <Auxiliary>
                    <Burger ingrediencies={this.state.ingrediencies} />
                    <BuildControls
                        ingredientAdded={this.addIngredienciesHandler}
                        ingredientRemoved={this.removeIngredienciesHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler} />
                </Auxiliary>
            );

            orderSummary = (
                <OrderSummary
                    price={this.state.totalPrice}
                    ingrediencies={this.state.ingrediencies}
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

export default ErrorHandler(BurgerBuilder, api);