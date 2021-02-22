import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../../api/api';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: this.createInput('input', 'text', 'Your Name'),
            street: this.createInput('input', 'text', 'Street'),
            zipCode: this.createInput('input', 'text', 'Zip code', '', true),
            country: this.createInput('input', 'text', 'Country'),
            email: this.createInput('input', 'email', 'Your Email', '', false, true),
            deliveryMethod: this.createInput('select', 'email', 'Your Email', '', false, false, false, ['fastest', 'cheapest']),
        },
        formIsValid: false,
        loading: false
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

    validateForm = (value, rules) => {
        if (rules.required) {
            if (!value) {
                return false;
            }
        }

        value = value.trim();
        if (rules.minLength) {
            if (value.length <= rules.minLength) {
                return false;
            }
        }

        if (rules.maxLength) {
            if (value.length > rules.maxLength) {
                return false;
            }
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (!pattern.test(value)) {
                return false;
            }
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            if (!pattern.test(value)) {
                return false;
            }
        }
        return true;
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

        this.setState({ loading: true });
        const order = {
            ingrediencies: this.props.ings,
            price: this.props.price,
            orderData: formData
        };

        api.post('/orders.json', order)
            .then(response => {
                // console.log(response);
                this.setState({ loading: false });
                this.props.history.replace('/');
            }).catch(error => {
                // console.log(error);
                this.setState({ loading: false });
            });
    };

    inputChangedHandler = (inputIdentifier, e) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = e.target.value;
        updatedFormElement.valid = this.validateForm(e.target.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

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

        if (this.state.loading) {
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
        ings: state.ingrediencies,
        price: state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);