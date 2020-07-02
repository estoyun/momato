import { createAction, createReducer } from '@reduxjs/toolkit';

const SIGNUP_REQUEST = createAction('SIGNUP_REQUEST');
const SIGNUP_SUCCEED = createAction('SIGNUP_SUCCEED');
const SIGNUP_CLEAR = createAction('SIGNUP_CLEAR');
const SIGNUP_FAILED = createAction('SIGNUP_FAILED');

export const signupActions = { SIGNUP_REQUEST, SIGNUP_SUCCEED, SIGNUP_CLEAR, SIGNUP_FAILED };

const initialState = {
  isSignupSucceed: false,
};

const reducer = createReducer(initialState, {
  [SIGNUP_REQUEST]: (state, action) => {
    return { ...state };
  },
  [SIGNUP_SUCCEED]: (state, action) => {
    return { ...state, isSignupSucceed: true };
  },
  [SIGNUP_CLEAR]: (state, action) => {
    return { ...state, isSignupSucceed: false };
  },
  [SIGNUP_FAILED]: (state, action) => {
    return { ...state, isSignupSucceed: false };
  },
});

export default reducer;
