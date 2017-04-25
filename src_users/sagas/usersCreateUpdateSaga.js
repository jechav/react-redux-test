import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api/users.js'

import {
  USERS_CREATE_UPDATE_REQUESTED,
  USERS_CREATE_UPDATE_SUCCEEDED,
  USERS_CREATE_UPDATE_FAILED
} from '../actions/user';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* createUpdateUser(action) {
  try {
    const data = yield call(Api.addEdit, action.data);
    yield put({type: USERS_CREATE_UPDATE_SUCCEEDED, data});
  } catch (e) {
    yield put({type: USERS_CREATE_UPDATE_FAILED, message: e.message});
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
  */
function* userCreateUpdateSaga() {
  yield takeEvery(USERS_CREATE_UPDATE_REQUESTED, createUpdateUser);
}

export default userCreateUpdateSaga;
