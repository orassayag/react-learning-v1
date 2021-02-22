import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat(action.person)
            };
        case actionTypes.DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => {
                    return person.id !== action.id;
                })
            };
        default:
            break;
    }
    return state;
};

export default reducer;