import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            /*             return {
                            counter: state.counter + 1
                        }; */

            // Approach 1:
            /*                 const newState = Object.assign({}, state);
                            newState.counter = state.counter + 1;
                            return newState; */

            // Approach 2:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            /*             return {
                            counter: state.counter - 1
                        }; */
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            break;
    }
    return state;
};

export default counterReducer;