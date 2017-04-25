import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api/users.js'

import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED
} from '../actions/users';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers(action) {
  try {
    const data = yield call(Api.getList);
    yield put({type: USERS_FETCH_SUCCEEDED, data});
  } catch (e) {
    yield put({type: USERS_FETCH_FAILED, message: e.message});
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
  */
function* userListSaga() {
  yield takeEvery(USERS_FETCH_REQUESTED, fetchUsers);
}

export default userListSaga;
