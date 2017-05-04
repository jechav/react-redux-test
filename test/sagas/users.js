import { call, put } from "redux-saga/effects";
import assert from "assert";
import { fetchUsers } from "../../src_users/sagas/usersListSaga";
import ApiUsers from "../../src_users/api/users";

// unit tests for the users saga
describe('Users saga', () => {
  describe('usersFetchList()', () => {
    const generator = fetchUsers();

    it('should return the ApiUsers.getList call', () => {
      assert.deepEqual(generator.next().value, call(ApiUsers.getList));
    });

    it('should return the USERS_FETCH_COMPLETED action', () => {
      assert.deepEqual(generator.next().value, put({type: 'USERS_FETCH_COMPLETED', data: undefined}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });
});
