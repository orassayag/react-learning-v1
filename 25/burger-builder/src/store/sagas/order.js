import { put } from 'redux-saga/effects';
import api from '../../api/api';
import * as actions from '../actions/index';

export function* purchaseBurgerSaga(action) {
    yield put(actions.purchaseBurgerStart());
    try {
        const response = yield api.post(`/orders.json?auth=${action.token}`, action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    }
};

export function* fetchOrdersSaga(action) {
    yield put(actions.fetchOrdersStart());
    const queryParams = `auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
    try {
        const response = yield api.get(`/orders.json?${queryParams}`);
        const fetchedOrders = [];
        if (response && response.data) {
            for (let key in response.data) {
                fetchedOrders.push({
                    id: key,
                    ...response.data[key]
                });
            }
        }
        yield put(actions.fetchOrdersSuccess(fetchedOrders));
    } catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
}