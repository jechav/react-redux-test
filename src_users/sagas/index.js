import { fork } from 'redux-saga/effects';
import userListSaga  from './usersListSaga';
import userCreateUpdateSaga from './usersCreateUpdateSaga';

export default function* root() {
    yield [
        fork(userListSaga),
        fork(userCreateUpdateSaga)
    ];
}
