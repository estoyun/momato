import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from './api';
import { loginActions } from '../store/modules/login.js';
import { signupActions } from '../store/modules/signup.js';
import { findPassActions } from '../store/modules/findPass';
import { withdrawActions } from '../store/modules/withdraw';
import { getTomatoActions } from '../store/modules/getTomato.js';
import { addTomatoActions } from '../store/modules/addTomato';
import { editTomatoActions } from '../store/modules/editTomato';
import { deleteTomatoActions } from '../store/modules/deleteTomato';
import { editMemberActions } from '../store/modules/editMember';
import { getTemplateActions } from '../store/modules/getTemplate';
import { addTemplateActions } from '../store/modules/addTemplate';
import { editTemplateActions } from '../store/modules/editTemplate';
import { deleteTemplateActions } from '../store/modules/deleteTemplate';
import { getCalendarActions } from '../store/modules/getCalendar';
import errorDispacher from '../error/errorDispacher';

function* addTomatoSaga(action) {
  try {
    const response = yield call(api.addTomato, action.payload.data);
    yield put(addTomatoActions.ADD_TOMATO_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(addTomatoActions.TOMATO_FAILED());
  }
}

function* editTomatoSaga(action) {
  try {
    const response = yield call(api.editTomato, action.payload.data);
    yield put(editTomatoActions.EDIT_TOMATO_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(editTomatoActions.EDIT_TOMATO_FAILED({ message: e.message }));
  }
}

function* deleteTomatoSaga(action) {
  try {
    const response = yield call(api.deleteTomato, action.payload.data);
    yield put(deleteTomatoActions.DELETE_TOMATO_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(deleteTomatoActions.DELETE_TOMATO_FAILED({ message: e.message }));
  }
}

function* getTomatoSaga(action) {
  try {
    const response = yield call(api.getTomato, action.payload.data);
    yield put(getTomatoActions.GET_TOMATO_SUCCEED({ tomatos: response.data.data.result }));
  } catch (e) {
    errorDispacher(e);
    yield put(getTomatoActions.GET_TOMATO_FAILED({ message: e.message }));
  }
}

function* getTemplateSaga(action) {
  try {
    const response = yield call(api.getTemplate, action);
    yield put(getTemplateActions.GET_TEMPLATE_SUCCEED({ templates: response.data.data.result }));
  } catch (e) {
    errorDispacher(e);
    yield put(getTemplateActions.GET_TEMPLATE_FAILED());
  }
}

function* addTemplateSaga(action) {
  try {
    const response = yield call(api.addTemplate, action.payload.data);
    yield put(addTemplateActions.ADD_TEMPLATE_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put({ message: e.message });
  }
}

function* editTemplateSaga(action) {
  try {
    const response = yield call(api.updateTemplate, action.payload);
    yield put(editTemplateActions.EDIT_TEMPLATE_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(editTemplateActions.EDIT_TEMPLATE_FAILD({ message: e.message }));
  }
}

function* deleteTemplateSaga(action) {
  try {
    const response = yield call(api.deleteTemplate, action.payload.data);
    yield put(deleteTemplateActions.DELETE_TEMPLATE_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(deleteTemplateActions.DELETE_TEMPLATE_SUCCEED({ message: e.message }));
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(api.login, action.payload.member);
    yield put(loginActions.LOGIN_SUCCEEDED({ response }));
  } catch (e) {
    errorDispacher(e);
  }
}

function* logoutSaga(action) {
  try {
    const response = yield call(api.logout, action.payload.auth);
    yield put(loginActions.LOGOUT_SUCCEEDED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(loginActions.LOGOUT_FAILED({ e }));
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(api.signup, action.payload.member);
    yield put(signupActions.SIGNUP_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(signupActions.SIGNUP_FAILED({ message: e.message }));
  }
}

function* getMemberInfoSaga() {
  try {
    const response = yield call(api.getMemberInfo);
    yield put(loginActions.GET_MEMBERINFO_SUCCEED({ memberInfo: response.data.data.result }));
  } catch (e) {
    errorDispacher(e);
    yield put(loginActions.GET_MEMBERINFO_FAILED());
  }
}

function* editMemberSaga(action) {
  try {
    const response = yield call(api.updateMember, action.payload.member);
    yield put(editMemberActions.EDIT_MEMBER_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
  }
}

function* findPassSaga(action) {
  try {
    const response = yield call(api.findPass, action.payload);
    yield put(findPassActions.FIND_PASS_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(findPassActions.FIND_PASS_FAILED());
  }
}

function* withdrawSaga(action) {
  try {
    const response = yield call(api.withdraw, action.payload);
    yield put(withdrawActions.WITHDRAW_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
  }
}

function* getCalendarSaga(action) {
  try {
    const response = yield call(api.getCalendar, action.payload.yearAndMonth);
    yield put(
      getCalendarActions.GET_CALENDAR_SUCCEED({
        tomatoOfDates: response.data.data.result,
      }),
    );
  } catch (e) {
    yield put(getCalendarActions.GET_CALENDAR_FAILED());
  }
}

function* baseSaga() {
  yield takeEvery(loginActions.LOGIN_REQUEST, loginSaga);
  yield takeEvery(loginActions.LOGOUT_REQUEST, logoutSaga);
  yield takeEvery(signupActions.SIGNUP_REQUEST, signupSaga);
  yield takeEvery(addTomatoActions.ADD_TOMATO_REQUEST, addTomatoSaga);
  yield takeEvery(editTomatoActions.EDIT_TOMATO_REQUEST, editTomatoSaga);
  yield takeEvery(deleteTomatoActions.DELETE_TOMATO_REQUEST, deleteTomatoSaga);
  yield takeEvery(getTomatoActions.GET_TOMATO_REQUEST, getTomatoSaga);
  yield takeEvery(getCalendarActions.GET_CALENDAR_REQUEST, getCalendarSaga);
  yield takeEvery(editMemberActions.EDIT_MEMBER_REQUEST, editMemberSaga);
  yield takeEvery(loginActions.GET_MEMBERINFO_REQUEST, getMemberInfoSaga);
  yield takeEvery(getTemplateActions.GET_TEMPLATE_REQUEST, getTemplateSaga);
  yield takeEvery(addTemplateActions.ADD_TEMPLATE_REQUEST, addTemplateSaga);
  yield takeEvery(editTemplateActions.EDIT_TEMPLATE_REQUEST, editTemplateSaga);
  yield takeEvery(deleteTemplateActions.DELETE_TEMPLATE_REQUEST, deleteTemplateSaga);
  yield takeEvery(findPassActions.FIND_PASS_REQUEST, findPassSaga);
  yield takeEvery(withdrawActions.WITHDRAW_REQUEST, withdrawSaga);
}

export default baseSaga;
