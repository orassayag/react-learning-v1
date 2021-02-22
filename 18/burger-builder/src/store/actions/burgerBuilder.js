import * as actionTypes from './actionTypes';
import api from '../../api/api';

export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingredientName
    };
};

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredientName
    };
};

export const setIngrediencies = (ingrediencies) => {
    return {
        type: actionTypes.SET_INGREDIENCIES,
        ingrediencies: ingrediencies
    };
};

export const fetchIngredienciesFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENCIES_FAILED
    };
};

export const initIngrediencies = () => {
    return (dispatch) => {
        api.get('/ingrediencies.json')
            .then(response => {
                dispatch(setIngrediencies(response.data));
            }).catch(error => {
                dispatch(fetchIngredienciesFailed());
            });
    };
};