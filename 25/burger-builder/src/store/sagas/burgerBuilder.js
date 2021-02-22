import { put } from 'redux-saga/effects';
import api from '../../api/api';
import * as actions from '../actions/index';

export function* initIngredienciesSaga(action) {
    try {
        const response = yield api.get('/ingrediencies.json');
        yield put(actions.setIngrediencies(response.data));
    } catch (error) {
        yield put(actions.fetchIngredienciesFailed());
    }
};