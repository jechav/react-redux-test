import assert from "assert";
import users from "../../src_users/reducers/users";

// unit tests for the users reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Users reducer', () => {
  describe('USERS_FETCH_REQUESTED', () => {
    it('should begin the request', () => {
      assert.deepEqual(
        users({}, {
          type: 'USERS_FETCH_REQUESTED',
        }),
        { isFetching: true }
      );
    });
  });

  describe('USERS_FETCH_COMPLETED', () => {
    it('should show users list', () => {
      assert.deepEqual(
        users({}, {
          type: 'USERS_FETCH_COMPLETED',
          data: [{
            name: 'juan',
            lastName: 'Garcia',
          }]
        }) ,
        {
          isFetching: false,
          items: [{
            name: 'juan',
            lastName: 'Garcia',
          }]
        }
      );
    });
  });

  describe('USERS_FETCH_FAILED', () => {
    it('should throw error', () => {
      assert.deepEqual(
      users({}, {
        type: 'USERS_FETCH_FAILED',
        message: '500 internal error'
      }) ,
        {
          isFetching: false,
          message: '500 internal error'
        }
      );
    });
  });

});
