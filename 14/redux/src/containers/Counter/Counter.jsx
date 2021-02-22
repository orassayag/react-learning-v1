import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 }; });
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 }; });
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value }; });
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value }; });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult.bind(this, this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => {
                        return (
                            <li key={strResult.id}
                                onClick={this.props.onDeleteResult.bind(this, strResult.id)}>
                                {strResult.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => {
            return dispatch({ type: actionTypes.INCREMENT });
        },
        onDecrementCounter: () => {
            return dispatch({ type: actionTypes.DECREMENT });
        },
        onAddCounter: () => {
            return dispatch({ type: actionTypes.ADD, value: 10 });
        },
        onSubtractCounter: () => {
            return dispatch({ type: actionTypes.SUBTRACT, value: 15 });
        },
        onStoreResult: (result) => {
            return dispatch({ type: actionTypes.STORE_RESULT, result: result });
        },
        onDeleteResult: (id) => {
            return dispatch({ type: actionTypes.DELETE_RESULT, id: id });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);