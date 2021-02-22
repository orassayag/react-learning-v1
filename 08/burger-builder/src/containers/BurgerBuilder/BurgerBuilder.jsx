import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal';
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
        ingrediencies: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
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
        alert('You continue!');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingrediencies
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingrediencies={this.state.ingrediencies}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingrediencies={this.state.ingrediencies} />
                <BuildControls
                    ingredientAdded={this.addIngredienciesHandler}
                    ingredientRemoved={this.removeIngredienciesHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;