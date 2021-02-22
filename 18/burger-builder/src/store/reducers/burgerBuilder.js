import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities/utility';

const initialState = {
    ingrediencies: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredient = {
        [action.ingredientName]: state.ingrediencies[action.ingredientName] + 1
    };
    const updatedIngrediencies = updateObject(state.ingrediencies, updatedIngredient);
    const updatedState = {
        ingrediencies: updatedIngrediencies,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIngredient = {
        [action.ingredientName]: state.ingrediencies[action.ingredientName] - 1
    };
    const updatedIngrediencies = updateObject(state.ingrediencies, updatedIngredient);
    const updatedState = {
        ingrediencies: updatedIngrediencies,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
};

const setIngrediencies = (state, action) => {
    return updateObject(state, {
        ingrediencies: {
            salad: action.ingrediencies.salad,
            bacon: action.ingrediencies.bacon,
            cheese: action.ingrediencies.cheese,
            meat: action.ingrediencies.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    });
};

const fetchIngredienciesFailed = (state) => {
    return updateObject(state, {
        error: true
    });
};

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENCIES:
            return setIngrediencies(state, action);
        case actionTypes.FETCH_INGREDIENCIES_FAILED:
            return fetchIngredienciesFailed(state);
        default:
            break;
    }
    return state;
};

export default burgerBuilderReducer;