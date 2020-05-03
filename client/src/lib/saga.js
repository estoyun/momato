import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import { signupActions } from "../store/modules/signup.js";
import { tomatoAddActions } from "../store/modules/tomatoAdd";
import { tomatoActions } from "../store/modules/tomato.js";
import { loginActions } from "../store/modules/login.js";

function* tomatoAddSaga(action) {
  try {
    const response = yield call(api.tomatoAdd, action.payload.data);
    yield put(tomatoAddActions.TOMATO_ADD_SUCCEED({ response }));
  } catch (e) {
    yield put({ type: "TOMATO_ADD_FAILED", message: e.message });
  }
}

function* tomatoSaga(action) {
  try {
    const response = yield call(api.tomato, action.payload.data);
    yield put(tomatoActions.TOMATO_SUCCEED({ response }));
    
  } catch (e) {
    yield put({ type: "TOMATO_FAILED", message: e.message });
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(api.login, action.payload.member);
    yield put(loginActions.LOGIN_SUCCEEDED({ response }));
    // yield put({ type: "LOGIN_SUCCEEDED", data: response });
  } catch (e) {
    yield put({ type: "LOGIN_FAILED", message: e.message });
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(api.signup, action.payload.member);
    yield put(signupActions.SIGNUP_SUCCEED({ response }));
  } catch (e) {
    yield put(signupActions.SIGNUP_FAILED({ message: e.message }));
  }
}

function* baseSaga() {
  yield takeEvery(loginActions.LOGIN, loginSaga);
  yield takeEvery(signupActions.SIGNUP_REQUEST, signupSaga);
  yield takeEvery(tomatoAddActions.TOMATO_ADD_REQUEST, tomatoAddSaga);
  yield takeEvery(tomatoActions.TOMATO_REQUEST, tomatoSaga);
}

export default baseSaga;
