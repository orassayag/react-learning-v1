import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import api from '../../../api/api';
import { updateObject, validateForm } from '../../../shared/utility';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import ErrorHandler from '../../../hoc/ErrorHandler/ErrorHandler';

class ContactData extends Component {
    state = {
        orderForm: {
            name: this.createInput('input', 'text', 'Your Name'),
            street: this.createInput('input', 'text', 'Street'),
            zipCode: this.createInput('input', 'text', 'Zip code', '', true),
            country: this.createInput('input', 'text', 'Country'),
            email: this.createInput('input', 'email', 'Your Email', '', false, true),
            deliveryMethod: this.createInput('select', 'email', 'Your Email', 'fastest', false, false, false, ['fastest', 'cheapest'])
        },
        formIsValid: false
    }

    createInput(inputType, type, placeholder, value = '', isNumeric = false, isEmail = false, shouldValidate = true, options = '', required = true, minLength = 5, maxLength = 50) {
        let elementConfig = null;
        if (options) {
            elementConfig = {
                options: options.map(cur => {
                    return { value: cur, displayValue: cur.charAt(0).toUpperCase() + cur.slice(1) };
                })
            };
        }
        else {
            elementConfig = {
                type: type,
                placeholder: placeholder
            };
        }

        const validation = {
            required: required,
            minLength: minLength,
            maxLength: maxLength,
            isNumeric: isNumeric,
            isEmail: isEmail
        };

        return {
            elementType: inputType,
            elementConfig: elementConfig,
            value: value,
            shouldValidate: shouldValidate,
            validation: validation,
            valid: shouldValidate ? false : true,
            touched: false
        };
    }

    orderHandler = (e) => {
        e.preventDefault();
        if (!this.state.formIsValid) {
            return;
        }

        const formData = {};
        for (let element in this.state.orderForm) {
            formData[element] = this.state.orderForm[element].value;
        }

        const order = {
            ingrediencies: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        };

        this.props.onOrderBurger(order, this.props.token);
    };

    inputChangedHandler = (inputIdentifier, e) => {
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: e.target.value,
            valid: validateForm(e.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true
        });

        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = false;
        for (let element in updatedOrderForm) {
            formIsValid = updatedOrderForm[element].valid;
            if (!formIsValid) {
                break;
            }
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(element => {
                    return (
                        <Input
                            key={element.id}
                            elementType={element.config.elementType}
                            elementConfig={element.config.elementConfig}
                            value={element.config.value}
                            shouldValidate={element.config.shouldValidate}
                            valid={element.config.valid}
                            touched={element.config.touched}
                            changed={this.inputChangedHandler.bind(this, element.id)} />
                    );
                })}
                <Button btnType="success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );

        if (this.props.loading) {
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

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingrediencies,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderBurger: (orderData, token) => {
            return dispatch(actions.purchaseBurger(orderData, token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(ContactData, api));