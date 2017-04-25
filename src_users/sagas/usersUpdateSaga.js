import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api/users.js'

import {
  USERS_UPDATE_REQUESTED,
  USERS_UPDATE_SUCCEEDED,
  USERS_UPDATE_FAILED
} from '../actions/user';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* updateUser(action) {
  try {
    const data = yield call(Api.update, action);
    yield put({type: USERS_UPDATE_SUCCEEDED, data});
  } catch (e) {
    yield put({type: USERS_UPDATE_FAILED, message: e.message});
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
  */
function* userUpdateSaga() {
  yield takeEvery(USERS_UPDATE_REQUESTED, updateUser);
}

export default userUpdateSaga;
