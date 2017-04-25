
import {
  USERS_CREATE_REQUESTED,
  USERS_CREATE_SUCCEEDED,
  USERS_CREATE_FAILED,

  USERS_UPDATE_REQUESTED,
  USERS_UPDATE_SUCCEEDED,
  USERS_UPDATE_FAILED
} from '../actions/user';

// users reducer
export default function user(state = [], action) {
  switch (action.type) {
    case USERS_CREATE_REQUESTED:
      return {
        isWorking: true,
        data: action.data
      }
    case USERS_CREATE_SUCCEEDED:
      return {
        isWorking: false,
      }
    case USERS_CREATE_FAILED:
      return {
        isWorking: false,
        message: action.message
      }
    // initial state
    default:
      return state;
  }
}
