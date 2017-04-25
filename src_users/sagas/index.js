import { fork } from 'redux-saga/effects';
import userListSaga  from './usersListSaga';
import userCreateSaga from './usersCreateSaga';
import userUpdateSaga from './usersUpdateSaga';

export default function* root() {
    yield [
        fork(userListSaga),
        fork(userCreateSaga),
        fork(userUpdateSaga)
    ];
}
