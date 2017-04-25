import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api/users.js'

import {
  USERS_CREATE_REQUESTED,
  USERS_CREATE_SUCCEEDED,
  USERS_CREATE_FAILED
} from '../actions/user';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* createUser(action) {
  try {
    const data = yield call(Api.add, action.data);
    yield put({type: USERS_CREATE_SUCCEEDED, data});
  } catch (e) {
    yield put({type: USERS_CREATE_FAILED, message: e.message});
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
  */
function* userCreateSaga() {
  yield takeEvery(USERS_CREATE_REQUESTED, createUser);
}

export default userCreateSaga;
