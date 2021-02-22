import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';

export function* logoutSaga(action) {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'userId');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(Number(action.expirationTime) * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());

    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };

    const key = 'AIzaSyAPZZY47KGG2aNteQ3p9V8N5o8jy7K5znE';
    let method = 'signupNewUser';
    if (!action.isSignUp) {
        method = 'verifyPassword';
    }

    try {
        const response = yield axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/${method}?key=${key}`, authData);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expirationDate', expirationDate);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }
}

export function* authCheckStateSaga(action) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    let isAuthenticated = false;

    if (token && userId && expirationDate) {
        isAuthenticated = expirationDate > new Date();
    }

    if (isAuthenticated) {
        yield put(actions.authSuccess(token, userId));
        yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
        yield put(actions.logout());
    }
}