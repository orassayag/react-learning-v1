import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import { rejects } from 'assert';

const ErrorHandler = (WrappedComponent, api) => {
    return class extends Component {
        requestInterceptors = null;
        responseInterceptors = null;
        state = {
            error: null
        };

        componentWillMount() {
            this.requestInterceptors = api.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });
            this.responseInterceptors = api.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            api.interceptors.request.eject(this.requestInterceptors);
            api.interceptors.response.eject(this.responseInterceptors);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Auxiliary>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            );
        }
    };
};

export default ErrorHandler;