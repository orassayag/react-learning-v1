import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result
                })
            };
        case actionTypes.DELETE_RESULT:
            //Approach 1:
            /*             const id = 2;
                        const newArray = [...state.results];
                        newArray.splice(id, 1);

                        return {
                            ...state,
                            results: newArray
                        }; */

            //Approach 2:
            const updatedArray = state.results.filter(result => {
                return result.id !== action.id;
            });

            return {
                ...state,
                results: updatedArray
            };
        default:
            break;
    }
    return state;
};

export default resultReducer;