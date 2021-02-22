import React, { Component } from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children;
    }

    render() {
        let modalClass = [classes.modal];
        if (this.props.show) {
            modalClass.push(classes.visible);
        }

        return (
            <Auxiliary>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed} />
                <div className={modalClass.join(' ')}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;