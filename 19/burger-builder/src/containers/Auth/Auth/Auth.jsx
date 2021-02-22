import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Auth.css';
import * as actions from '../../../store/actions/index';
import { updateObject, validateForm } from '../../../shared/utility';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Auth extends Component {
    state = {
        controls: {
            email: this.createInput('input', 'email', 'Your Email', '', false, true),
            password: this.createInput('input', 'password', 'Your Password', '')
        },
        formIsValid: false,
        isSignUp: true
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

    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangedHandler = (controlName, e) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: e.target.value,
                valid: validateForm(e.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });

        /*         let formIsValid = false;
                for (let element in updatedControls) {
                    formIsValid = updatedControls[element].valid;
                    if (!formIsValid) {
                        break;
                    }
                }
         */
        //this.setState({ controls: updatedControls, formIsValid: formIsValid });
        this.setState({ controls: updatedControls });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            };
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(element => {
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
        });

        if (this.props.loading) {
            form = (
                <Spinner />
            );
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        const title = this.state.isSignUp ? 'Sign up' : 'Sign in';
        const buttonTitle = this.state.isSignUp ? 'SIGNIN' : 'SIGNUP';

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = (
                <Redirect to={this.props.authRedirectPath} />
            );
        }

        return (
            <div className={classes.auth}>
                {authRedirect}
                <h1>{title}</h1>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="success">SUBMIT</Button>
                </form>
                <Button btnType="danger" clicked={this.switchAuthModeHandler}>SWITCH TO {buttonTitle}</Button>
                {errorMessage}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignUp) => {
            return dispatch(actions.auth(email, password, isSignUp));
        },
        onSetAuthRedirectPath: () => {
            return dispatch(actions.setAuthRedirectPath('/'));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);