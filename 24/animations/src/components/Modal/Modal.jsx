import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
/* import Transition from 'react-transition-group/Transition'; */

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed',
                apper: '',
                apperActive: ''
            }}>
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    );

    /*     return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={props.show}
                timeout={animationTiming}
                classNames="fade-slide">
                <div className="Modal">
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
            </CSSTransition>
        ); */

    /*     const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed']; */
    /*     const cssClasses = ['Modal', props.show === 'entering' ? 'ModalOpen' : props.show === 'exiting' ? 'ModalClosed' : null]; */

    /*     return (
            <Transition
                mountOnEnter
                unmountOnExit
                in={props.show}
                timeout={animationTiming}>
                {(state) => {
                    const cssClasses = ['Modal', state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null];
                    return (
                        <div className={cssClasses.join(' ')}>
                            <h1>A Modal</h1>
                            <button className="Button" onClick={props.closed}>Dismiss</button>
                        </div>
                    );
                }}
            </Transition>
        ); */
};

export default modal;