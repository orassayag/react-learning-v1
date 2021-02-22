import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    return updateObject(state, { results: state.results.filter(result => result.id !== action.id) });
    /*             // const id = 2;
                // const newArray = [...state.results];
                // newArray.splice(id, 1)
                const updatedArray = state.results.filter(result => result.id !== action.id);
                return {
                    ...state,
                    results: updatedArray
                }; */
};

const storeResult = (state, action) => {
    return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) });

    /*             return {
                    ...state,
                    results: state.results.concat({ id: new Date(), value: action.result * 2 })
                }; */
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return storeResult(state, action);
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            break;
    }
    return state;
};

export default reducer;