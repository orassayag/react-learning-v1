import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = (props) => {
    let modalClass = [classes.modal];
    if (props.show) {
        modalClass.push(classes.visible);
    }

    return (
        <Aux>
            <Backdrop
                show={props.show}
                clicked={props.modalClosed} />
            <div className={modalClass.join(' ')}>
                {props.children}
            </div>
        </Aux>
    );
};

export default Modal;